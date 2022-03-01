const { JWT_SECRET, JWT_EXPIRES } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../db");

const login = (req, res, next) => {
  let { email, password } = req.body;

  User.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        throw new Error("Invalid user or password");
      } else {
        if (bcrypt.compareSync(password, user.password)) {
          let token = jwt.sign({ user: user }, JWT_SECRET, {
            expiresIn: JWT_EXPIRES,
          });

          res.cookie("userToken", token);
          res.status(200).json({
            id: user.id,
            email:user.email,
            username: user.username,
            token: token,
          });
        } else {
          throw new Error("Invalid user or password");
        }
      }
    })
    .catch((err) => {
      next(err);
    });
};

module.exports = login;
