import { gql } from "@apollo/client";

export const mutationUserRegister = gql`
  mutation RegisterUser($input: userData) {
    registerUser(input: $input) {
      error
      message
    }
  }
`;
