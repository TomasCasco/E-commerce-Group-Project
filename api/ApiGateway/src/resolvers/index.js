const { mergeResolvers } = require("@graphql-tools/merge");
const userResolvers = require("./auth");

const resolvers = mergeResolvers([userResolvers]);

module.exports = resolvers;
