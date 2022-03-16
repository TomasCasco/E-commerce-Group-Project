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
  query getAllBrands {
    getAllBrands
  }
`;

export const queryCategories = gql`
  query getAllCategories {
    getAllCategories
  }
`;

export const queryProductById = gql`
  query ($input: String) {
    getProductById(input: $input) {
      _id
      brand
      category
      name
      price
      image
      description
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
