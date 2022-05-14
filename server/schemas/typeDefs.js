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
    description: String
    image: String
    type: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    spiritToken: SpiritToken
  }

  type Mutation {
    addUser(email: String!, password: String!, heroName: String!, charAvatar: Int!, stamina: Int): Auth

    addSpiritToken(spiritToken: ID): SpiritToken

    updateUser(charAvatar: String!, email: String, password: String, heroName: String, spiritTokens: [ID], wins: Int): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
