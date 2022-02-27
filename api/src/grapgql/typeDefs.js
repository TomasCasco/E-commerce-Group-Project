const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    price: Int!
  }

  type Query {
    prueba: String!
    allProducts: [Product]!
  }
`;

module.exports = { typeDefs };
