const productsResolvers = {
  Query: {
    async getAllProducts(_, {}, { dataSources }) {
      return await dataSources.ProductsApi.getAllProducts();
    },
    async getProductsByNameOrType(_, { input }, { dataSources }) {
      return await dataSources.ProductsApi.getProductsByName(input);
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
    async deleteProduct(_, { input }, { dataSources, userAccess }) {
      // if (userAccess?.role === "admin")
      return await dataSources.ProductsApi.deleteProduct(input);
      // else return { error: "Acceso no autorizado" };
    },
  },
};

module.exports = productsResolvers;
