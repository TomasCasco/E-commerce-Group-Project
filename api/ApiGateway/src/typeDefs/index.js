const userTypes = require("./auth");
const productTypes = require("./products");
const emailTypes = require("./emails");

const schemasArray = [userTypes, productTypes, emailTypes];

module.exports = schemasArray;
