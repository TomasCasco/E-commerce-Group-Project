const { BCRYPT_ROUNDS } = process.env;
const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (req, res, next) => {
  let { username, email, password } = req.body;
  if (password.length < 6 || password.length > 20) {
    throw new Error("The password must be between 6 and 20 characters");
  }
  //encriptamos password
  password = bcrypt.hashSync(password, parseInt(BCRYPT_ROUNDS));
  //creamos usuario
  const newUser = new User({
    username,
    email,
    password,
  });

  try {
    const savedUser = await newUser.save();
    res
      .status(200)
      .json({ msg: `User created successfully`, userId: savedUser._id });
  } catch (error) {
    next(error);
  }
};

module.exports = register;
