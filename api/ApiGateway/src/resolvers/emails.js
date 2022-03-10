const emailResolvers = {
  Query: {
    async signup(_, { input }, { dataSources }) {
      return await dataSources.EmailsApi.signup(input);
    },
    async forget(_, { input }, { dataSources }) {
      return await dataSources.EmailsApi.forget(input);
    },
  },
};

module.exports = emailResolvers;
