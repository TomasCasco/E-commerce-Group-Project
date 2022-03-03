const User = require("../models/User");

const access = async(req, res, next) => {
  try {
    const user = await User.findById(req.user);

    user
      ? res.status(200).json({
          userId: user._id
        })
      : res.status(500).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = access;
