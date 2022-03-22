const Cart = require("../models/Cart");
const User = require("../models/User");

const editCart = async (req, res, next) => {
  const { userId } = req.params;

  const product = req.body;
  console.log(req.body);

  try {
    if (userId && (await User.findById(userId))) {
      let cart = await Cart.findOne({ userId });
      await Cart.updateOne({ userId, products: product });

      const { products } = cart;
      res.status(200).json({ userId, products });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = editCart;
