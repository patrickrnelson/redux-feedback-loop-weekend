import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import StartPage from '../StartPage/StartPage';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';
import ThankYouPage from '../ThankYouPage/ThankYouPage'
import Admin from '../Admin/Admin'

function App() {

  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          <StartPage />
        </Route>
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
        <Route path='/thankyou'>
          <ThankYouPage />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
      </Router>
 
    </div>
  );
}

export default App;
