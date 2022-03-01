const { Router } = require("express");
const login = require("../controllers/login");
const register = require("../controllers/register");
const auth = require("../controllers/auth");

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verifyToken", auth);


module.exports = router;
