const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    password: String
    heroName: String
    charAvatar: String
    stamina: Int
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

    updateUser(password: String, heroName: String, charAvatar: String): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
