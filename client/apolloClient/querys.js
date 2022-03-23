import { gql } from "@apollo/client";

export const queryProducts = gql`
  query getAllProducts($input: filterAndSort) {
    getAllProducts(input: $input) {
      _id
      name
      price
      brand
      image
      description
      stock
      category
    }
  }
`;

export const queryLogin = gql`
  query LoginUser($input: userLogin) {
    loginUser(input: $input) {
      error
      token
    }
  }
`;
export const queryInfoUser = gql`
  query InfoUser {
    infoUser {
      error
      username
      email
      id
      role
    }
  }
`;

export const ALL_BRANDS = gql`
  query GetAllBrands {
    getAllBrands
  }
`;

export const queryCategories = gql`
  query GetAllCategories {
    getAllCategories
  }
`;

export const queryProductById = gql`
  query GetProductById($input: String) {
    getProductById(input: $input) {
      _id
      brand
      category
      name
      price
      image
      description
      stock
    }
  }
`;

export const CONFIRM_CHANGE_PASSWORD = gql`
  query ($email: String) {
    confirmChangePassword(email: $email) {
      message
      error
    }
  }
`;

export const queryGetCart = gql`
  query ($userId: ID, $products: [Products]) {
    getCart(userId: $userId, products: $products) {
      products
    }
  }
`;

export const queryBuyFromCheckout = gql`
  query BuyFromCheckout($cart: [InputProduct], $userId: ID, $email: String) {
    buyFromCheckout(cart: $cart, userId: $userId, email: $email) {
      url
    }
  }
`;

export const queryBills = gql`
  query GetBills($input: ID) {
  query ($input: ID) {
    getBills(input: $input) {
      userId
      products
      total
      status
      total
      products {
        id
        title
        quantity
        unit_price
      }
      createdAt
    }
  }
`;
