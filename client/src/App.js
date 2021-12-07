import React from 'react';
import GlobalFonts from './fonts/fonts';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';



import Home from '../src/pages/index'
import SignUp from '../src/pages/signup'
import SignIn from '../src/pages/signin'

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <GlobalFonts/>
      <Router>
        <Route exact path="/"> <Home/> </Route>
      </Router>
      <Router>
        <Route exact path="/signup"> <SignUp/> </Route>
      </Router>
      <Router>
        <Route exact path="/signin"> <SignIn/> </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
