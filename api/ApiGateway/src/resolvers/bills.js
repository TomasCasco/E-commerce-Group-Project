const billResolvers = {
  Mutation: {
    buyFromCheckout(_, { input }, { dataSources }) {
      return dataSources.BillsApi.buyFromCheckout(input);
    },
  },
};

module.exports = billResolvers;
