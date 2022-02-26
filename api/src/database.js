require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.URL_MONGO)
  .then(async () => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
