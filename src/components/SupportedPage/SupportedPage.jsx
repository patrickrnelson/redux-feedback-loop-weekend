import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function SupportedPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [supportScore, setSupportScore] = useState(0);

  const onClick = () => {
    dispatch({
      type: 'SUPPORT_SCORE',
      payload: supportScore
    })

    history.push('/comments')
  }

  return (
    <>
    <label htmlFor="supportedScore">How well are you being supported?</label>
    <input 
      id="supportedScore" 
      type="number"
      value={supportScore}
      onChange={(event) => setSupportScore(event.target.value)} />
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default SupportedPage;