const User = require("../models/User");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES } = process.env;

const confirmChangePassword = async (req, res, next) => {
  // obtenemos el email
  const { email } = req.body;

  try {
    // verificamos que exista el usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "user not found" });
    }

    // generamos un token
    const token = getToken({ email: `${user.email}`, id: `${user._id}` });

    await axios.post("http://localhost:5000/emails/confirm-change-password", {
      name: `${user.username}`,
      email: `${user.email}`,
      token,
    });
  } catch (error) {
    next(error);
  }
};

function getToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

module.exports = confirmChangePassword;
