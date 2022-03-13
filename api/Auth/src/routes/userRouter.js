const { Router } = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const getUserInfo = require("../controllers/getUserInfo");
const getCart = require("../controllers/getCart");
const editCart = require("../controllers/editCart");
const access = require("../controllers/access");
const auth = require("../middlewares/auth");
const forget = require("../controllers/forget");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/access", auth, access);
router.post("/forget", forget);
router.get("/userInfo", auth, getUserInfo);
router.get("/:userId/cart", auth, getCart);
router.put("/:userId/cart", auth, editCart);

module.exports = router;
