const mongoose = require("mongoose");

const billSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Bill", billSchema);
