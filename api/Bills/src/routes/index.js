const { Router } = require("express");
const mercadopago = require("../config/mercadopago");
const Bill = require("../models/Bill");

const router = Router();

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

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const billsOfUser = await Bill.find({ userId });
    if (!billsOfUser) return { message: "This user didn't make any purchase" };
    res.json(billsOfUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
