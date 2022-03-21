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
  mutation EditCart($userId: ID, $products: [Products]) {
    editCart(userId: $userId, products: $products) {
      products
    }
  }
`;
