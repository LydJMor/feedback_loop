import React from 'react';
import {useDispatch, connect} from 'react-redux';

const Home = (props) =>{
    //handles dispatch
    const dispatch = useDispatch();
    //return date field
    return (
        <>
         <h3>Let us know how your day went!</h3>
         <p>Let's start!</p>
         <form onSubmit = {(event) => {
            dispatch({type: 'date', payload: event.target.date.value});
            
            props.history.push('/feeling')
        }}>
              <label>Today's Date:</label> 
              <input type="date" required id="date"/>
              <br/>
              <br/>
              <input type='submit' value='Submit'/>
            </form>
        </>
    );
  }

export default connect()(Home);