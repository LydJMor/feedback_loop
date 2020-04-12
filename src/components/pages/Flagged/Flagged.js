import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Flagged extends Component {

    state = {
        newFeedback: {
          flagged: '',
          
        }
      }

    render() {
        return (
          <div className="Flagged">
            <br/>
            <form>
              <label>flagged:</label><input></input><button></button>
            </form>
          </div>
        );
      }


    
}






export default connect()(Flagged);