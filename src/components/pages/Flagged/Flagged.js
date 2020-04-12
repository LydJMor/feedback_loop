import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Flagged extends Component {



    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Feedback!</h1>
              <h4><i>Don't forget it!</i></h4>
            </header>
            <br/>
            <form>
              <label>feeling:</label><input></input><button></button>
              <label>understanding</label><input></input><button></button>
              <label>support:</label><input></input><button></button>
              <label>comments:</label><input></input><button></button>
              <label>flagged:</label><input></input><button></button>
              <label>date:</label><input></input><button></button>
            </form>
          </div>
        );
      }


    
}






export default connect()(Flagged);