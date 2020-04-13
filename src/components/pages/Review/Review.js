import React from 'react';
import {useSelector, connect} from 'react-redux';
import axios from 'axios'

const Review = () => {
     //handles dispatch
    const newFeedback = useSelector(state => state.feedback.newFeedback);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding feedback`, newFeedback);
       
        axios.post('/feedback', newFeedback)
        .then( response =>{
          console.log('feedback')
        })
          .catch (error =>{
            console.log('error adding', error)
        })
      }


        //shows resulys of the input fields and allows you to submit them to the database
        return (
          <div className="Review">
            <br/>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flagged</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{newFeedback.feeling}</td>
                        <td>{newFeedback.understanding}</td>
                        <td>{newFeedback.support}</td>
                        <td>{newFeedback.comments}</td>
                        <td>{newFeedback.flagged}</td>
                        <td>{newFeedback.date}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick = {(event) => handleSubmit(event)}>Submit</button>
          </div>
        );
    
}


export default connect()(Review);