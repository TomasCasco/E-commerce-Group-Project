const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3003);

app.listen(app.use(port), () =>
  console.log(`Bills listening on port ${app.use(port)}`)
);

module.exports = app;
