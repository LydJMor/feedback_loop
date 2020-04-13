import React from 'react';
import {connect, useDispatch} from 'react-redux';


const Feeling = (props) => {
    //handles dispatch
    const dispatch = useDispatch();

        //returns feeling dropdown menu
        return (
          <div className="Feeling">
           
           <form onSubmit = {(event) => {
            dispatch({type: 'feeling', payload: event.target.feeling.value});
            
            props.history.push('/understanding')
        }}>
              <label>How are you feeling today?</label>
              <select required id="feeling">
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






export default connect()(Feeling);