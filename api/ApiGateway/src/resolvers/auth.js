const userResolvers = {
  Query: {
    loginUser(_, { input }, { dataSources }) {
      return dataSources.UsersApi.loginUser(input);
    },
  },
  Mutation: {
    registerUser(_, { input }, { dataSources }) {
      return dataSources.UsersApi.registerUser(input);
    },
  },
};

module.exports = userResolvers;
