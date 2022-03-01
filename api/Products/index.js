const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3004);

app.listen(app.use(port), () =>
  console.log(`Products listening on port ${app.use(port)}`)
);

module.exports = app;
