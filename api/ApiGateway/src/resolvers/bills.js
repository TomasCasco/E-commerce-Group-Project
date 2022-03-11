const billResolvers = {
  Query: {
    getBillByUserId(_, { input }, { dataSources }) {
      return dataSources.BillsApi.getBillsByUserId(input);
    },
  },
};
