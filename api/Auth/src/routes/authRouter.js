const { Router } = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const auth = require("../controllers/auth");
const getUserInfo = require("../controllers/getUserInfo");
const getCart = require("../controllers/getCart");
const editCart = require("../controllers/editCart");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verifyToken", auth);
router.get("/:userId/", getUserInfo);
router.get("/:userId/cart", getCart);
router.post("/:userId/cart", editCart);

module.exports = router;
