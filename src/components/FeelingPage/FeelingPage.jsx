import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FeelingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [feelingScore, setFeelingScore] = useState(0);

  const onClick = () => {
    if(feelingScore > 0 && feelingScore < 6) {
      dispatch({
        type: 'FEELING_SCORE',
        payload: feelingScore
      })
      history.push('/understanding')
    }
    else {
      alert('Please choose a number between 1 and 5')
    }
  }
  
  return (
    <>
    <label htmlFor="feelingScore">How are you feeling today?</label>
    <input 
      id="feelingScore" 
      type="number" 
      value={feelingScore}
      onChange={(event) => setFeelingScore(event.target.value)} />
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default FeelingPage;