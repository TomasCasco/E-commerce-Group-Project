const { gql } = require("apollo-server");

const emailTypes = gql`
  input Signup {
    name: String!
    email: String!
  }

  input Forget {
    name: String!
    email: String!
    newPassword: String!
  }

  type Response {
    message: String!
  }

  type Query {
    signup(input: Signup): Response
    forget(input: Forget): Response
  }
`;

module.exports = emailTypes;
