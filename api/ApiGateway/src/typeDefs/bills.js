const { gql } = require("apollo-server");

const billTypes = gql`
  input InputProduct {
    title: String
    unit_price: Float
    quantity: Int
    id: ID
    picture_url: String
  }

  type Product {
    id: ID
    name: String
    price: Float
    qty: Int
    title: String
    unit_price: Float
    quantity: Int
  }
  type Bill {
    userId: ID
    products: [Product]
    total: Float
    status: String
    createdAt: String
  }

  type URLResponse {
    url: String
  }

  type Query {
    getBills(input: ID): [Bill]
    buyFromCheckout(
      cart: [InputProduct]
      userId: ID
      email: String
    ): URLResponse
  }
`;

module.exports = billTypes;
