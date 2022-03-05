const { gql } = require("apollo-server");

const productTypes = gql`
  type product {
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
    type: String
  }

  type updateResponse {
    message: String
    error: String
  }

  type deleteResponse {
    message: String
  }

  enum orderBy {
    brand
    description
    image
    name
    price
    stock
    type
  }

  enum sortBy {
    asc
    desc
  }

  input inputProduct {
    name: String!
    price: Float!
    brand: String!
    image: String!
    description: String!
    stock: Int!
    type: String!
  }

  input mutateProduct {
    id: String!
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
    type: String
  }

  input nameOrType {
    name: String
    type: String
  }

  input filterAndSort {
    orderBy: orderBy
    sortBy: sortBy
    categories: [String]
    brands: [String]
    name: String
  }

  type Query {
    getAllProducts(input: filterAndSort): [product]
    getProductsByNameOrType(input: nameOrType): [product]
    getProductById(input: String): product
  }

  type Mutation {
    createProduct(input: inputProduct): product
    updateProduct(input: mutateProduct): updateResponse
    deleteProduct(input: String): deleteResponse
  }
`;

module.exports = productTypes;
