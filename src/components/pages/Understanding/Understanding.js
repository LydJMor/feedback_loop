import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Understanding extends Component {




    render() {
        return (
          <div className="App">
            <form>
              <label>understanding</label><input></input><button></button>
            </form>
          </div>
        );
      }

    
}






export default connect()(Understanding);








