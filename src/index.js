import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 

const feedback = (state = {newFeedback: {}, comment:''}, action) => {
    switch (action.type){
        case "date":
            console.log('date recieved', action.payload);
            return Object.assign({}, state, {newFeedback: {date: action.payload, ...state.newFeedback}})
        case "feeling":
                console.log('feeling recieved', action.payload);
                return Object.assign({}, state, {newFeedback: {feeling: parseInt(action.payload), ...state.newFeedback}})
        case "understanding":
                console.log('understanding recieved', action.payload);
                return Object.assign({}, state, {newFeedback: {understanding: parseInt(action.payload), ...state.newFeedback}})
        case "comments":
                console.log('comments recieved', action.payload);
                return Object.assign({}, state, {newFeedback: {comments: action.payload, ...state.newFeedback}})
        case "flagged":
                console.log('flagged recieved recieved', action.payload);
                return Object.assign({}, state, {newFeedback: {flagged: action.payload, ...state.newFeedback}})
        case "support":
                console.log('support recieved', action.payload);
                return Object.assign({}, state, {newFeedback: {support: parseInt(action.payload), ...state.newFeedback}})
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

 
