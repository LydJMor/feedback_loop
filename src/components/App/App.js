import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <Home />
    </Router>
    );
  }
}

export default App;
