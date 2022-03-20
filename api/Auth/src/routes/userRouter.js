const { Router } = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const getUserInfo = require("../controllers/getUserInfo");
const getCart = require("../controllers/getCart");
const editCart = require("../controllers/editCart");
const access = require("../controllers/access");
const auth = require("../middlewares/auth");
const confirmEmail = require("../controllers/confirmEmail");
const changePassword = require("../controllers/changePassword");
const confirmChangePassword = require("../controllers/confirmChangePassword");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/access", auth, access);
router.post("/confirm-change-password", confirmChangePassword);
router.get("/userInfo", auth, getUserInfo);
router.get("/:userId/cart", auth, getCart);
router.get("/confirm-email/:token", confirmEmail);
router.get("/change-password/:token", changePassword);
router.put("/:userId/cart", editCart);

module.exports = router;
