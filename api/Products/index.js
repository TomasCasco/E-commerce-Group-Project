const express = require("express");
const app = express();
const route = require("./Ruta");

require("./db");

app.set("port", process.env.PORT || 3004);

app.use(express.json());

// routes
app.use("/", route);

app.listen(app.get("port"), () =>
  console.log(`Products listening on port ${app.get("port")}`)
);

module.exports = app;
