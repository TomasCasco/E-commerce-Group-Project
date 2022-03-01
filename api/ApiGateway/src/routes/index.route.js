const { Router } = require("express");
const routes = Router();
const Products = require("./Product.route");

routes.use("/products", Products);

module.exports = routes;
