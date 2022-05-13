const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    heroName: String
    charAvatar: String
    stamina: Int
    spiritTokens: [SpiritToken]
    wins: Int
  }
  type SpiritToken {
    _id: ID
    name: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      email: String!
      password: String!
      heroName: String!
      charAvatar: String!
      stamina: Int
    ): Auth

    addSpiritToken(
      spiritToken: ID
    )

    updateUser(
      charAvatar: String!
      email: String
      password: String
      heroName: String
      spiritTokens: [ID]
      wins: Int
    ): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
