import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <form>
          <label>feeling:</label><input></input>
          <label>understanding</label><input></input>
          <label>support:</label><input></input>
          <label>comments:</label><input></input>
          <label>flagged:</label><input></input>
          <label>date:</label><input></input>
        </form>
      </div>
    );
  }
}

export default App;
