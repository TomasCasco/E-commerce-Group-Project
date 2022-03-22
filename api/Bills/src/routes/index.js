const { Router } = require("express");
const mercadopago = require("../config/mercadopago");
const Bill = require("../models/Bill");
const axios = require("axios");
const router = Router();

router.get("/get-bill/:id", async (req, res) => {
  const { id } = req.params;
  const bill = await Bill.find({ userId: id });
  res.json(bill);
});

router.post("/mercadopago", async (req, res, next) => {
  try {
    const { items, userId, email } = req.body;
    const preference = {
      items,
      payer: {
        id: userId,
        email,
      },
    };
    console.log(preference);
    const response = await mercadopago.preferences.create(preference);
    res.json({ url: response.body.init_point });
  } catch (error) {
    next(error);
  }
});

router.post("/hook", async (req, res, next) => {
  try {
    const {
      data: { id },
    } = req.body;
    console.log("pago terminado-----------------");
    const request = await axios.get(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        headers: {
          Authorization: "Bearer " + process.env.ACCESS_TOKEN,
        },
      }
    );

    const data = request.data;
    console.log(data);

    const products = data.additional_info.items;
    const total = data.transaction_amount;
    const userId = data.payer.id;
    const email = data.payer.email;
    const { status } = data;

    const newBill = new Bill({
      userId,
      products,
      total,
      status,
    });

    await newBill.save();
    await axios.post("http://localhost:5000/emails/bills", {
      email,
      products,
      total,
      status,
    });
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
