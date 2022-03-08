const { gql } = require("apollo-server");

const productTypes = gql`
  type product {
    _id: String!
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
    category: String
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
    category
  }

  enum sortBy {
    asc
    desc
  }

  input inputProduct {
    _id: String!
    name: String!
    price: Float!
    brand: String!
    image: String!
    description: String!
    stock: Int!
    category: String!
  }

  input mutateProduct {
    _id: String!
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
    category: String
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
