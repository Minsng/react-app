import React, { useState } from 'react';
import {
  BrowserRouter as Router , 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Visual from './components/Visual.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Visual />
        <Content />
      </div>
    </Router>
  );
}

export default App;