const { Router } = require("express");
const mercadopago = require("../config/mercadopago");

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

router.post("/test", (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;
