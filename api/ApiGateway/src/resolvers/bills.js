const billResolvers = {
  Query: {
    buyFromCheckout(_, { cart, userId, email }, { dataSources }) {
      return dataSources.BillsApi.buyFromCheckout(cart, userId, email);
    },
    getBills(_, { input }, { dataSources }) {
      return dataSources.BillsApi.getBills(input);
    },
  },
};

module.exports = billResolvers;
