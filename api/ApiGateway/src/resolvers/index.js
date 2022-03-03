const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./auth");
const productResolvers = require("./products");

const resolvers = mergeResolvers([userResolvers, productResolvers]);

module.exports = resolvers;
