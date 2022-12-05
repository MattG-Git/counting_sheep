const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
    }
    type Sleep {
        _id: ID
        date: String
        hours: Int
        quality: String
        user: ID
    }
    type Query {
        login(username: String!, password: String!): Auth
        sleepData: [Sleep]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        addUser(username: String!, password: String!): Auth
        addSleep(date: String!, hours: Int!, quality: String!): Sleep
    }
`;

module.exports = typeDefs;