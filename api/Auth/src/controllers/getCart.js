const User = require("../models/User");
const Cart = require("../models/Cart");

const getCart = async (req, res, next) => {
  const { userId } = req.params;
  try {
    if (userId && (await User.findById(userId))) {
      let cart = await Cart.findOne({ userId });
      !cart ? (cart = await Cart.create({ userId })) : null;
      const { products } = cart;
      res.status(200).json({ userId, products });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getCart;
