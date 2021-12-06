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
}

type Query{
   Posts: [Post]!
   post(postId: ID!): Post
}


type Mutation {
   addPost(title: String!, description: String!, category: String!): Post  
   removePost(postId: ID!): Post
}

`

module.exports = typeDefs;