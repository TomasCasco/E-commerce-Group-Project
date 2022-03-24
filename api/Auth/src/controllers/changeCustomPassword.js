const User = require("../models/User");

const changeCustomPassword = async (req, res, next) => {
  const newPassword = req.body.newPassword;
  try {
    const user = await User.findById(req.body.userId);
    if (user) {
      user.password = newPassword;
      user.save();
      res.status(200).json({ msg: "Password changed successfully !" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = changeCustomPassword;
