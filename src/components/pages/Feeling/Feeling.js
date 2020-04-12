import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Feeling extends Component {




    render() {
        return (
          <div className="Feeling">
           
            <form>
              <label>feeling:</label><input></input><button></button>
            </form>
          </div>
        );
      }

    
}






export default connect()(Feeling);