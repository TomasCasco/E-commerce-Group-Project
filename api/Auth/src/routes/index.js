const { Router } = require("express");

const authRouter = require("./authRouter");

const router = Router();

router.use("/", authRouter);


module.exports = router;
