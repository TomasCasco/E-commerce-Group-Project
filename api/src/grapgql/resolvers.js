const Product = require("../models/Products.model");

const resolvers = {
  Query: {
    prueba: () => "hello world",
    allProducts: async () => {
      const products = await Product.find();
      return products;
    },
  },
};

module.exports = { resolvers };
