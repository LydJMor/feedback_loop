import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {useDispatch, connect} from 'react-redux';




const Home = () =>{
   
    const dispatch = useDispatch();


 
    return (

        <>
         
         <h3>Let us know how your day went!</h3>
         <p>Let's start!</p>
            <form>
              <label>Today's Date:</label> 
              <input type="date" required  
              onChange= {(event) => {dispatch({type: "date", payload: event.target.value})}}
          />
            <Link to='/feeling'>Submit</Link>
            </form>
        </>
    );
  }


export default connect()(Home);