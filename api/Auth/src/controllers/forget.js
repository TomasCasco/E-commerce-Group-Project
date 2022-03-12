const User = require("../models/User");
const axios = require("axios");
const bcrypt = require("bcrypt");
require("dotenv").config();
const { BCRYPT_ROUNDS } = process.env;

const newPass = () => {
  let pass = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 8; i++) {
    const ranNum = Math.floor(Math.random() * characters.length);
    pass += characters[ranNum];
  }
  return pass;
};

const forgetPassword = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const userNewPassword = newPass();
      const passwordHash = bcrypt.hashSync(
        userNewPassword,
        parseInt(BCRYPT_ROUNDS)
      );
      await User.updateOne({ email }, { password: passwordHash });
      await axios.post("http://localhost:5000/emails/forget", {
        name: user.username,
        email: user.email,
        newPassword: userNewPassword,
      });
      return res.json({ message: "password changed" });
    } else {
      return res.json({ message: "user not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = forgetPassword;
