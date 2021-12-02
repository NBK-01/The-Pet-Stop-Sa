const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const mongoose = require('mongoose');
const { typeDefs, resolvers } = require('./schemas');
// const { authMiddleware } = require('./utils/auth');
// const db = require('./config/connection');

async function startServer(){
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start();


  apolloServer.applyMiddleware({app: app});


  app.use((req, res) => {
    res.send("Helloooooo")
  });

  await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/pet-stop-sa', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  app.listen(4000, () => console.log('Hello server running'))
}

startServer()