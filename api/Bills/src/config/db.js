const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  })
  .then((db) => {
    console.log("DB connected!");
  })
  .catch((err) => console.log("Error: ", err));
