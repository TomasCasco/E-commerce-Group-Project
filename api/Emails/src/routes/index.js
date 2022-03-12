const { Router } = require("express");
const app = Router();
const Mail = require("./Mail");

app.use("/emails", Mail);

module.exports = app;
