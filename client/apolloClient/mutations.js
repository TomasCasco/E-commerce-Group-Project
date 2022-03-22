import { gql } from "@apollo/client";

export const mutationUserRegister = gql`
  mutation RegisterUser($input: userData) {
    registerUser(input: $input) {
      error
      message
    }
  }
`;

export const mutationEditCart = gql`
  mutation ($userId: ID, $products: [ProductsCart]) {
    editCart(userId: $userId, products: $products) {
      userId
      products {
        product {
          name
          price
          category
          description
          brand
          image
          stock
        }
        qty
      }
    }
  }
`;