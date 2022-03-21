const User = require("../models/User");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES, EMAIL_API } = process.env;

const newPass = () => {
  let pass = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 8; i++) {
    const ranNum = Math.floor(Math.random() * characters.length);
    pass += characters[ranNum];
  }
  return pass;
};

const changePassword = async (req, res, next) => {
  const { token } = req.params;

  try {
    // verificamos el token
    const data = verifyToken(token);
    if (!data) {
      return res.json({ error: "error getting credentials" });
    }
    const { email } = data;

    // verificamos que exista el usuario con el email
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "user not found" });
    }

    // cambiamos la contraseña
    user.password = newPass();

    // enviamos el email
    await axios.post(`${EMAIL_API}/change-password`, {
      name: `${user.username}`,
      email: `${user.email}`,
      newPassword: `${user.password}`,
    });

    // guardamos la contraseña nueva
    await user.save();

    res.json({ message: "your password was changed successfully" });
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

module.exports = changePassword;
