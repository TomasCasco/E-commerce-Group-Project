const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("./config/db");

const { adminJSRouter, rootPath } = require("./config/adminJS");
const errorHandler = require("./middlewares/errorHandler");
const setHeaders = require("./middlewares/setHeaders");
const routes = require("./routes");

const server = express();

server.serverName = "AUTH";

server.set("port", process.env.PORT || 3002);

server.use(rootPath, adminJSRouter);
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(setHeaders);
server.use("/", routes);

server.use(errorHandler);

module.exports = server;
