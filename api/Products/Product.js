const { Schema, model } = require("mongoose");

const Product = new Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = model("Product", Product);
