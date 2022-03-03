const { JWT_SECRET, JWT_EXPIRES } = process.env;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const login = async (req, res, next) => {
  let { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ error: "Invalid email or password" });
    } else {
      if (bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign(
          {
            userId: user._id,
            username: user.username,
            email: user.email,
          },
          JWT_SECRET,
          {
            expiresIn: JWT_EXPIRES,
          }
        );
        const { username } = user._doc;

        res.status(200).json({token});

      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  } catch (error) {
    next(error);
  }
};

module.exports = login;
