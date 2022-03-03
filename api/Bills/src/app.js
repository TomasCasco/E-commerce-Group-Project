const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const setHeaders = require("./middlewares/setHeaders");
const errorHandler = require("./middlewares/errorHandler");
const router=require("./routes")

require("./config/db");


const server = express();

server.serverName = "BILLS";

server.set("port", process.env.PORT || 3003);

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);

server.use("/bills",router)

server.use(errorHandler);

module.exports = server;
