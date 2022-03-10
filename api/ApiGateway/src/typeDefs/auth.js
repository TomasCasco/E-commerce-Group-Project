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
    token: String
    error: String
  }

  type responseRegister {
    message: String
    error: String
  }

  type responseInfoUser {
    error: String
    username: String!
    email: String!
    id: String!
    role: String!
  }

  type Query {
    loginUser(input: userLogin): responseLogin
    infoUser : responseInfoUser
  }

  type Mutation {
    registerUser(input: userData): responseRegister
  }
`;

module.exports = userTypes;
