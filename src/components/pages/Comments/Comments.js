import React from 'react';
import {useDispatch, connect} from 'react-redux';


const Comments = (props) => {
     //handles dispatch
    const dispatch = useDispatch();

        //returns comment input field
      return (
          <div>
            <form onSubmit = {(event) => {
            dispatch({type: 'comments', payload: event.target.comment.value});
            
            props.history.push('/flagged')
            }}>
        <label>Comments:</label>
          <input type="text" id="comment"></input>
          <br/>
          <br/>
            <input type='submit' value='Submit'/>
        </form>
          </div>
        );
}


export default connect()(Comments);