const billResolvers = {
  Query: {
    getBillsByUserId(_, { input }, { dataSources }) {
      return dataSources.BillsApi.getBillsByUserId(input);
    },
  },
};

module.exports = billResolvers;
