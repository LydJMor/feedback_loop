import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class Home extends Component {
  render() {
    return (
   
        <>
          <div className="App">
            <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
            </header>
         <br/>
            <form>
              <label>date:</label><input></input><button></button>
            </form>
          </div>
        </>
    );
  }
}

export default Home;