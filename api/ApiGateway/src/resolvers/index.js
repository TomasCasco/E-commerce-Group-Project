const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./auth");
const productResolvers = require("./products");
const emailResolvers = require("./emails");

const resolvers = mergeResolvers([
  userResolvers,
  productResolvers,
  emailResolvers,
]);

module.exports = resolvers;
