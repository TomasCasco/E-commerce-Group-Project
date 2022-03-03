const productsResolvers = {
  Query: {
    async getAllProducts(_, {}, { dataSources }) {
      return await dataSources.ProductsApi.getAllProducts();
    },
    async getProductByName(_, { input }, { dataSources }) {
      return await dataSources.ProductsApi.getProductByName(input);
    },
    async getProductById(_, { input }, { dataSources }) {
      return await dataSources.ProductsApi.getProductById(input);
    },
  },

  Mutation: {
    async createProduct(_, { input }, { dataSources }) {
      return await dataSources.ProductsApi.createProduct(input);
    },
    async updateProduct(_, { input }, { dataSources }) {
      const { id, ...product } = input;
      return await dataSources.ProductsApi.updateProduct(id, product);
    },
    async deleteProduct(_, { input }, { dataSources }) {
      return await dataSources.ProductsApi.deleteProduct(input);
    },
  },
};

module.exports = productsResolvers;
