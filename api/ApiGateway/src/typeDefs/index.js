const userTypes = require("./auth");
const productTypes = require("./products");
const billTypes = require("./bills");

const schemasArray = [userTypes, productTypes, billTypes];

module.exports = schemasArray;
