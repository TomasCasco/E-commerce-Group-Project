const User = require("../models/User");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES } = process.env;

const confirmEmail = async (req, res, next) => {
  // obtenemos el token
  const { token } = req.params;

  try {
    //   verificamos el token
    const data = verifyToken(token);
    if (!data) {
      return res.json({ error: "error getting credentials" });
    }
    const { email, code } = data;

    // verificamos el usuario
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "user not found" });
    }

    // verificamos el codigo del usuario
    if (code !== `${user.code}`) {
      return res.json({ error: "invalid credentials" });
    }

    // confirmamos el email del usuario
    user.status = true;
    await user.save();

    res.json({ message: "email verified successfully" });
  } catch (error) {
    next(error);
  }
};

function verifyToken(token) {
  let data = null;
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      data = decoded;
    }
  });
  return data;
}

module.exports = confirmEmail;
