const { gql } = require("apollo-server");

const billTypes = gql`
  input Product {
    id: ID
    name: String
    price: Number
    qty: Number
  }

  type Mutation {
    buyFromCheckout(input: [Product]): String
  }
`;

module.exports = billTypes;
