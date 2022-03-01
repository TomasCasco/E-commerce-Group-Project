const { Schema, model } = require("mongoose");

const Product = new Schema({
  name: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
});

module.exports = model("Product", Product);
