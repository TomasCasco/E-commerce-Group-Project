const User = require("../models/User");

const getUserInfo = async (req, res, next) => {
  const { userId } = req.params;
  try {
    if (userId) {
      const user = await User.findById(userId);
      user
        ? res
            .status(200)
            .json({ id: user._id, username: user.username, email: user.email })
        : res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getUserInfo;
