import React, { useState } from 'react';
import {
  BrowserRouter as Router , 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import Header from './components/layout/header.js';
import Content from './components/layout/content.js';
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