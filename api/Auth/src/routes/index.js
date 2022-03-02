const { Router } = require("express");

const authRouter = require("./authRouter");

const router = Router();

router.use("/users", authRouter);


module.exports = router;
