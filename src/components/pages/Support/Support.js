import React from 'react';
import {useDispatch, connect} from 'react-redux';


const Support = (props) => {
     //handles dispatch
    const dispatch = useDispatch();

        //returns support dropdown menuu
        return (
          <div className="Support">
            
            <form onSubmit = {(event) => {
            dispatch({type: 'support', payload: event.target.support.value});
            
            props.history.push('/review')
        }}>
              
              <label>How well did you feel supported by staff?</label>
              <select required id="support">
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






export default connect()(Support);