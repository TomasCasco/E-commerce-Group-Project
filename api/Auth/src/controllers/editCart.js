const Cart = require("../models/Cart");
const User = require("../models/User");

const editCart = async (req, res, next) => {
  const { userId } = req.params;

  const { arrayProducts } = req.body;
  try {
    if (userId && (await User.findById(userId))) {
      let cart = await Cart.findOne({ userId });
      cart.products = arrayProducts;
      await cart.save();

      const {products}=cart
      res.status(200).json({userId,products});
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = editCart;
