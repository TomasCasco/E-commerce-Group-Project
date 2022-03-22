const { Router } = require("express");
const mercadopago = require("../config/mercadopago");

const router = Router();

router.get("/get-bill/:id", async (req, res) => {
  const { id } = req.params;
  const allBills = await Bill.find({userId: id}, {userId: true, products: true, total: true, status: true});
  return res.json(allBills);
});

router.post("/mercadopago", async (req, res, next) => {
  const { total } = req.body;
  try {
    const preference = {
      items: [
        {
          title: "Order gamerland",
          currency_id: "ARS",
          picture_url:
            "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          quantity: 1,
          unit_price: parseInt(total),
        },
      ],
      back_urls: {
        success: "http://localhost:3000/mercadopago/success",
        failure: "http://localhost:3000/mercadopago/failure",
        pending: "http://localhost:3000/mercadopago/pending",
      },
    };

    const response = await mercadopago.preferences.create(preference);
    res.json({ url: response.body.init_point });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
