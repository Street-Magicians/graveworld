const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID

    email: String
    heroName: String
    charAvatar: String
    stamina: Number
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(email: String!, password: String!, heroName: String!): Auth

    updateUser(email: String, password: String, heroName: String): User

    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
