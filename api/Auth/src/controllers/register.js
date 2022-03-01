const { BCRYPT_ROUNDS } = process.env;
const bcrypt = require("bcrypt");
const { User } = require("../db");

const register = (req, res, next) => {
  let { username, email, password } = req.body;
  if (password.length < 6 || password.length > 20) {
    throw new Error("The password must be between 6 and 20 characters");
  }
  //encriptamos password
  password = bcrypt.hashSync(password, parseInt(BCRYPT_ROUNDS));
  //creamos usuario
  User.create({
    username: username,
    email: email,
    password: password,
  })
    .then((user) => {
      res.status(200).json({ msg: "Successfully registered!" });
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = register;
