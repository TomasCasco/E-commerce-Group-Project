const mongoose = require("mongoose");

mongoose
  .connect(process.env.DB_URL_MONGO,{
    useNewUrlParser:true
  })
  .then((db) => console.log("DB connected!"))
  .catch((err) => console.log("Error: ", err));
