import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 

const feedback = (state = {newFeedback: {}, comment:''}, action) => {
    switch (action.type){
        case "date":
            console.log('date recieved', action.payload);
             return {newFeedback: {date: action.payload, ...state.newFeedback},...state}
             break
        default: 
            return state
    }
}

const reduxStore = createStore(
    combineReducers({
      feedback
    }),
    applyMiddleware(logger)
  );

  ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

 
