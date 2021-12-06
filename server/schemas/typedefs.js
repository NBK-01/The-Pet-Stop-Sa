const { gql } = require('apollo-server-express');


const typeDefs = gql`


type User {
   _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
}

type Post {
   _id: ID
   title: String
   description: String
   category: String
   postAuthor: String
   postDate: Date
}

type Auth{
   token: ID!
   user: User
}

type Query{
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(thoughtId: ID!): Post
    me: User
}


type Mutation {
   addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    addPost(title: String!, description: String!): Post
    
    removePost(postId: ID!): Post
   
}

`;

module.exports = typeDefs;