const { Router } = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const getUserInfo = require("../controllers/getUserInfo");
const getCart = require("../controllers/getCart");
const editCart = require("../controllers/editCart");
const access = require("../controllers/access");
const auth = require("../middlewares/auth");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/access",auth,access)
router.get("/:userId/", getUserInfo);
router.get("/:userId/cart", getCart);
router.put("/:userId/cart", editCart);

module.exports = router;
