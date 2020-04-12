import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Support extends Component {

    state = {
        newFeedback: {
          support: '',
          
        }
      }

    render() {
        return (
          <div className="Support">
            
            <form>
              
              <label>support:</label><input></input><button></button>
             
            </form>
          </div>
        );
      }


    
}






export default connect()(Support);