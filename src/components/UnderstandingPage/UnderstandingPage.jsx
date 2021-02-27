import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function UnderstandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [understandingScore, setUnderstanding] = useState(0);

  const onClick = () => {
    if(understandingScore > 0 && understandingScore < 6) {
      dispatch({
        type: 'UNDERSTANDING_SCORE',
        payload: understandingScore
      })
      history.push('/supported')
    }
    else {
      alert('Please choose a number between 1 and 5')
    }
  }

  return (
    <>
    <label htmlFor="understandingScore">How well are you understanding the content?</label>
    <input 
      id="understandingScore" 
      type="number"
      value={understandingScore}
      onChange={(event) => setUnderstanding(event.target.value)} />
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default UnderstandingPage;