const { gql } = require("apollo-server");

const productTypes = gql`
  type product {
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
  }

  type updateResponse {
    message: String
    error: String
  }

  type deleteResponse {
    message: String
  }

  input inputProduct {
    name: String!
    price: Float!
    brand: String!
    image: String!
    description: String!
    stock: Int!
  }

  input mutateProduct {
    id: String!
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
  }

  type Query {
    getAllProducts: [product]
    getProductByName(input: String): [product]
    getProductById(input: String): product
  }

  type Mutation {
    createProduct(input: inputProduct): product
    updateProduct(input: mutateProduct): updateResponse
    deleteProduct(input: String): deleteResponse
  }
`;

module.exports = productTypes;