import React from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
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
        {/* Start Page Router */}
        <Route exact path='/'>
          <StartPage />
        </Route>
        {/* Feeling Score Router */}
        <Route path='/feeling'>
          <FeelingPage />
        </Route>
        {/* Understanding Score Router */}
        <Route path='/understanding'>
          <UnderstandingPage />
        </Route>
        {/* Supported Score Router */}
        <Route path ='/supported'>
          <SupportedPage />
        </Route>
        {/* Additional Comments Router */}
        <Route path='/comments'>
          <CommentsPage />
        </Route>
        {/* Review Page Router */}
        <Route path='/review'>
          <ReviewPage />
        </Route>
        {/* Thank You Page Router */}
        <Route path='/thankyou'>
          <ThankYouPage />
        </Route>
        {/* Admin Page Router */}
        {/* Can only access by typing into address bar */}
        <Route path='/admin'>
          <Admin />
        </Route>
      </Router>
 
    </div>
  );
}

export default App;
