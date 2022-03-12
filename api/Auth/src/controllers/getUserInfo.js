const User = require("../models/User");

const getUserInfo = async (req, res, next) => {
  const userId = req.user;
  try {
    if (userId) {
      const user = await User.findById(userId);
      user
        ? res
            .status(200)
            .json({
              id: user._id,
              username: user.username,
              email: user.email,
              role: user.role,
            })
        : res.status(200).json({ error: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getUserInfo;
