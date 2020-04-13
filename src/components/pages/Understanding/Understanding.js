import React from 'react';

import {useDispatch, connect} from 'react-redux';

const Understanding = (props) => {
     //handles dispatch
    const dispatch = useDispatch();

        //returns understanding dropdown menu
        return (
          <div className="Understanding">
            <form onSubmit = {(event) => {
            dispatch({type: 'understanding', payload: event.target.understanding.value});
            
            props.history.push('/comments')
        }}>
              <label>How well did you understand the material?</label>
              <select required id="understanding" >
                    <option value= '1'>1</option>
                    <option value= '2'>2</option>
                    <option value= '3'>3</option>
                    <option value= '4'>4</option>
                    <option value= '5'>5</option>
                </select>
                <br/>
                <br/>
                <input type='submit' value='Submit'/>
            </form>
          </div>
        );
    
    
}






export default connect()(Understanding);








