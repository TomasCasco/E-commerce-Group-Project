const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES, EMAIL_API } = process.env;
const axios = require("axios");
const { v4: uuid } = require("uuid");

const register = async (req, res, next) => {
  let { username, email, password } = req.body;
  try {
    if (password.length < 6 || password.length > 20) {
      res.json({ error: "The password must be between 6 and 20 characters" });
    }
    const findUserByUsername = await User.findOne({ username });
    const findUserByEmail = await User.findOne({ email });
    if (findUserByUsername) return res.json({ error: "Username in use" });
    if (findUserByEmail) return res.json({ error: "Email in use" });
    //creamos usuario
    console.log("id -> " + uuid());
    const newUser = new User({
      username,
      email,
      password,
      code: uuid(),
    });

    // generamos un token
    const token = getToken({
      email: `${newUser.email}`,
      code: `${newUser.code}`,
    });

    // enviamos email confirmacion de cuenta
    await axios.post(`${EMAIL_API}/signup`, {
      name: `${newUser.username}`,
      email: `${newUser.email}`,
      token,
    });

    const savedUser = await newUser.save();
    res.status(201).json({ message: `User created successfully` });
  } catch (error) {
    next(error);
  }
};

function getToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
}

module.exports = register;
