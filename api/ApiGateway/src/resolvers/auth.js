const userResolvers = {
  Query: {
    loginUser(_, { input }, { dataSources }) {
      return dataSources.UsersApi.loginUser(input);
    },
    infoUser(_, {}, { token, dataSources }) {
      return dataSources.UsersApi.infoUser(token);
    },
    confirmChangePassword(_, { email }, { dataSources }) {
      return dataSources.UsersApi.confirmChangePassword(email);
    },
  },
  Mutation: {
    registerUser(_, { input }, { dataSources }) {
      return dataSources.UsersApi.registerUser(input);
    },
    editCart(_, { userId, products }, { dataSources }) {
      return dataSources.UsersApi.editCart(userId, products)
    }
  },
};

module.exports = userResolvers;
