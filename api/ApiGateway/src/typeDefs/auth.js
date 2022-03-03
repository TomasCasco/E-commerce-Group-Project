const { gql } = require("apollo-server");

const userTypes = gql`
  input userLogin {
    email: String!
    password: String!
  }

  input userData {
    username: String!
    email: String!
    password: String!
  }

  type responseLogin {
    username: String!
    token: String!
  }

  type responseRegister {
    msg: String
    error: String
  }

  type Query {
    loginUser(input: userLogin): responseLogin
  }

  type Mutation {
    registerUser(input: userData): responseRegister
  }
`;

module.exports = userTypes;
