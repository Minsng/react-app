import React, { useState } from 'react';
import {
  BrowserRouter as Router , 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import Header from './components/header.js';
import Content from './components/content.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
      </div>
    </Router>
  );
}

export default App;