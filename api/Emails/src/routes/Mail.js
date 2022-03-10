const { Router } = require("express");
const app = Router();
const { Signup, Forget } = require("../controller");

app.post("/signup", Signup);
app.post("/forget", Forget);

module.exports = app;
