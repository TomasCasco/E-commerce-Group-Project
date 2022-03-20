const Cart = require("../models/Cart");
const User = require("../models/User");

const editCart = async (req, res, next) => {
  const { userId } = req.params;

  const product = req.body;
  console.log(req.body);

  try {
    if (userId && (await User.findById(userId))) {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId });
      }
      cart.products = product;
      await cart.save();

      const { products } = cart;
      res.status(200).json({ userId, products });
    } else {
      console.log("user not found");
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = editCart;
