import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Home from '../pages/Home/Home'
import { HashRouter as Router, Route } from "react-router-dom";
import Feeling from '../pages/Feeling/Feeling';
import Comments from '../pages/Comments/Comments';
import Understanding from '../pages/Understanding/Understanding';

class App extends Component {
  render() {
    return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route exact path='/feeling' component={Feeling} />
      <Route exact path='/comments' component={Comments} />
      <Route exact path='/flagged' component={Flagged} />
      <Route exact path='/support' component={Support} />
      <Route exact path='/understanding' component={Understanding} />
    </Router>
    );
  }
}

export default App;
