const { gql } = require("apollo-server");

const billTypes = gql`
  type Product {
    _id: String!
    name: String
    price: Float
    brand: String
    image: String
    description: String
    stock: Int
    category: String
  }

  type Bill {
    products: [Product]
    total: Int
    success: Boolean
  }

  type Query {
    getBillsByUserId(input: String): [Bill]
  }
`;

module.exports = billTypes;
