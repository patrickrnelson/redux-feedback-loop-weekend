import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage'
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage'
import SupportedPage from '../SupportedPage/SupportedPage'
import CommentsPage from '../CommentsPage/CommentsPage'
import ReviewPage from '../ReviewPage/ReviewPage'

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
    
        <Route path='/feeling'>
          <FeelingPage />
        </Route>
        <Route path='/understanding'>
          <UnderstandingPage />
        </Route>
        <Route path ='/supported'>
          <SupportedPage />
        </Route>
        <Route path='/comments'>
          <CommentsPage />
        </Route>
        <Route path='/review'>
          <ReviewPage />
        </Route>
      </Router>
 bv
    </div>
  );
}

export default App;
