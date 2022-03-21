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

  input Product {
    image: String
    name: String
    brand: String
    price: Float
    stock: Int
    description: String
    category: String
  }

  input Products {
    product: Product
    qty: Int
  }

  type ProductsResponse {
    product: ProductType
    qty: Int
  }

  type ProductResponse {
    userId: ID
    products: [ProductsResponse]
  }

  type ProductType {
    image: String
    name: String
    brand: String
    price: Float
    stock: Int
    description: String
    category: String
  }

  type responseConfirmChangePassword {
    message: String
    error: String
  }

  input Product {
    image: String
    name: String
    brand: String
    price: Float
    stock: Int
    description: String
    category: String
  }

  input ProductsCart {
    product: ProductInput
    qty: Int
  }

  type ProductsResponse {
    product: ProductType
    qty: Int
  }

  type ProductResponse {
    userId: ID
    products: [ProductsResponse]
  }

  type ProductType {
    image: String
    name: String
    brand: String
    price: Float
    stock: Int
    description: String
    category: String
  }

  input ProductInput {
    image: String
    name: String
    brand: String
    price: Float
    stock: Int
    description: String
    category: String
  }

  type Query {
    loginUser(input: userLogin): responseLogin
    infoUser: responseInfoUser
    confirmChangePassword(email: String): responseConfirmChangePassword
    getCart(userId: ID, products: [ProductsCart]) : ProductResponse
  }

  type Mutation {
    registerUser(input: userData): responseRegister
    editCart(userId: ID, products: [ProductsCart]) : ProductResponse
  }
`;

module.exports = userTypes;
