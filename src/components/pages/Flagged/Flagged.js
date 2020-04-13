import React from 'react';
import {useDispatch, connect} from 'react-redux';


const Flagged = (props) => {
     //handles dispatch
    const dispatch = useDispatch();

    //returns flagged checkbox
        return (
          <div className="Flagged">
            <br/>
            <form onSubmit = {(event) => {
            dispatch({type: 'flagged', payload: event.target.flagged.value});
            
            props.history.push('/support')
        }}>
              <label>flag if you need help:</label><input type="checkbox" id="flagged"></input>
              <br/>
              <br/>
              <input type='submit' value='Submit'/>
            </form>
          </div>
        );
      
    
}



export default connect()(Flagged);