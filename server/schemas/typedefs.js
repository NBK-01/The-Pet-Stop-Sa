const { gql } = require('apollo-server-express');


const typeDefs = gql`
type Query{
    hello: string
}
`