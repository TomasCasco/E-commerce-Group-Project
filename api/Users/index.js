const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3005);

app.listen(app.use(port), () =>
  console.log(`Users listening on port ${app.use(port)}`)
);

module.exports = app;
