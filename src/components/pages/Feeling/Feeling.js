import React, {Component} from 'react';
import {connect, useStore} from 'react-redux';
import axios from 'axios'

const Feeling = (props) => {

   

    const store = useStore()
    console.log(store.getState())
        return (
          <div className="Feeling">
           
            <form>
              <label>feeling:</label>
              <input required placeholder="Feeling" 
            //   value={this.state.newFeedback.Feeling}
            //   onChange={(event) => this.handleChangeForFeeling('Feeling:', event)}
          /><button></button>
            </form>
          </div>
        );
      

    
}






export default connect()(Feeling);