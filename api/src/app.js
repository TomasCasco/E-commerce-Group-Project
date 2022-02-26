const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.route");

const app = express();
require("./database");

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
app.use(express.json());
app.use(morgan("dev"));

app.use("/", routes);

module.exports = app;
