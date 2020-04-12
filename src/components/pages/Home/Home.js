import React, { Component } from 'react';
import axios from 'axios';


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
         <h3>Let us know how your day went!</h3>
         <p>Let's start!</p>
            <form>
              <label>Today's Date:</label><input type="datetime-local"></input><button >Next</button>
            </form>
          </div>
        </>
    );
  }
}

export default Home;