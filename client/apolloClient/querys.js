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
  query {
    getAllBrands
  }
`;

export const queryBillsOfUser = gql`
  query BillsById($input: String) {
    getBillsByUserId {
      products {
        _id
        brand
        category
        description
        image
        name
        price
        stock
      }
      success
      total
    }
  }
`;
