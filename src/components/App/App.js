import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";


//page imports
import Home from '../pages/Home/Home'
import Feeling from '../pages/Feeling/Feeling';
import Comments from '../pages/Comments/Comments';
import Understanding from '../pages/Understanding/Understanding';
import Flagged from '../pages/Flagged/Flagged'
import Support from '../pages/Support/Support'
import Review from '../pages/Review/Review'

const App = (props) => {

    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
   <br/>
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/feeling' component={Feeling} />
      <Route path='/comments' component={Comments} />
      <Route path='/flagged' component={Flagged} />
      <Route path='/support' component={Support} />
      <Route path='/understanding' component={Understanding} />
      <Route path='/review' component={Review} />
    </Router>
    </div>
    );
  
}

export default App;
