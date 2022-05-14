import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $password: String!
    $heroName: String!
    $charAvatar: String!
    $stamina: String!
  ) {
    addUser(
      email: $email
      password: $password
      heroName: $heroName
      charAvatar: $charAvatar
      stamina: $stamina
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $charAvatar: String!
    $email: String
    $password: String
    $heroName: String
    $spiritTokens: [ID]
    $wins: Int
  ) {
    updateUser(
      charAvatar: $charAvatar
      email: $email
      password: $password
      heroName: $heroName
      spiritTokens: [ID]
      wins: $wins
    )
  }
`;

export const ADD_SPIRIT_TOKEN = gql`
mutation addSpiritToken(
  spiritToken: ID
)`;
