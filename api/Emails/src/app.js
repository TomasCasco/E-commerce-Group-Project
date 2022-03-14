const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/index");

app.set("port", process.env.PORT || 5000);

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/", routes);

module.exports = app;
