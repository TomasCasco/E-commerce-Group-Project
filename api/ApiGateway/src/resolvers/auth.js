const userResolvers = {
  Query: {
    loginUser(_, { input },{ dataSources }) {
      return dataSources.UsersApi.loginUser(input);
    },
    infoUser(_,_a, {token,dataSources}) {
      return dataSources.UsersApi.infoUser(token);
    }
  },
  Mutation: {
    registerUser(_, { input }, { dataSources }) {
      return dataSources.UsersApi.registerUser(input);
    },
  },
};

module.exports = userResolvers;
