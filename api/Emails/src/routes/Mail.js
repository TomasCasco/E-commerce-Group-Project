const { Router } = require("express");
const app = Router();
const {
  Signup,
  confirmChangePassword,
  changePassword,
} = require("../controller");

app.post("/signup", Signup);
app.post("/confirm-change-password", confirmChangePassword);
app.post("/change-password", changePassword);

module.exports = app;
