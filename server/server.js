const express = require('express');
const { ApolloServer, gql} = require('apollo-server-express');

const mongoose = require('mongoose');




const typeDefs = gql`

type Query{
   hello: String!
}
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
      },
  }

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen({port: 5000})
  .then(res => {
    console.log(`server runiung at ${res.url}`)
  })