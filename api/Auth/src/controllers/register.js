const User = require("../models/User");

const register = async (req, res, next) => {
  let { username, email, password } = req.body;
  try {
    if (password.length < 6 || password.length > 20) {
      throw new Error("The password must be between 6 and 20 characters");
    }
    //creamos usuario
    const newUser = new User({
      username,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res
      .status(201)



      .json({ message: `User created successfully`});
  } catch (error) {
    next(error);
  }
};

module.exports = register;
