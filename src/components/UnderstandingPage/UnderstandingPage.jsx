import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Material UI
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    <h4 id="understandingScore" className="feedbackQuestion">How well are you understanding the content?</h4>
    <Box display="flex" justifyContent="center">
      <RadioGroup row aria-label="UnderstandingScore" name="understanding" value={understandingScore} onChange={(event) => setUnderstanding(event.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="bottom"/>
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="bottom"/>
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="bottom"/>
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="bottom"/>
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="bottom"/>
      </RadioGroup>
    </Box>
    <button className="nextBtn" onClick={onClick}>Next</button>
    </>
  )
}

export default UnderstandingPage;