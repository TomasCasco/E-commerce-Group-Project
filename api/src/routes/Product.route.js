const { Router } = require("express");
require("dotenv").config();
const Product = require("../models/Products.model");

const app = Router();

app.get("/", async (req, res) => {
  await Product.collection.drop();
  await Product.collection.insertMany([
    { name: "producto1", price: 99 },
    { name: "producto2", price: 50 },
    { name: "producto3", price: 200 },
    { name: "producto4", price: 110 },
    { name: "producto5", price: 9125 },
  ]);

  const products = await Product.find();
  res.json(products);
});

module.exports = app;
