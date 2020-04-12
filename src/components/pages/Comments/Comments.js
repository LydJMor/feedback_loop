import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Comments extends Component {


    render() {
        return (
          <div className="App">
            <form>
              <label>comments:</label><input></input><button></button>
            </form>
          </div>
        );
      }

}






export default connect()(Comments);