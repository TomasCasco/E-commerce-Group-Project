const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./auth");
const productResolvers = require("./products");
const billResolvers = require("./bills");

const resolvers = mergeResolvers([
  userResolvers,
  productResolvers,
  billResolvers,
]);

module.exports = resolvers;
