const User = require("../models/User");

const access = (res, req, next) => {
  try {
    const user = await User.findById(req.user);

    user
      ? res.status(200).json({
          userId: user._id,
          rol: user.role,
        })
      : res.status(500).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = access;
