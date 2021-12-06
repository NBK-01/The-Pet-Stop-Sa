import React from 'react';
import './App.css';
import Home from '../src/pages/index'
import GlobalFonts from './fonts/fonts';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalFonts/>
      <Home/>
    </Router>
  );
}

export default App;
