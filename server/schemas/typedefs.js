const { gql } = require('apollo-server-express');


const typeDefs = gql`

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