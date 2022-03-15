const { Router } = require("express");
const mercadopago = require("../config/mercadopago");
const Bill = require("../models/Bill");
const axios = require("axios");

const router = Router();

router.post("/mercadopago", async (req, res, next) => {
  try {
    const preference = {
      items: req.body,
    };
    console.log(preference);
    const response = await mercadopago.preferences.create(preference);
    console.log(response);
    res.json({ url: response.body.init_point });
  } catch (error) {
    next(error);
  }
});

router.post("/hook", async (req, res) => {
  try {
    const {
      data: { id },
    } = req.body;
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
    const { status } = data;

    const newBill = new Bill({
      userId: 1,
      products,
      total,
      status,
    });

    await newBill.save();
    res.sendStatus(200);
  } catch (e) {
    next(e);
  }
});
// router.post("/hook", async (req, res) => {
//   try {
//     const products = req.body.additional_info.items;
//     const total = req.body.transaction_amount;
//     const { status } = req.body;
//     res.sendStatus(200);

//     const newBill = new Bill({
//       products,
//       total,
//       status,
//     });
//     await newBill.save();
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
