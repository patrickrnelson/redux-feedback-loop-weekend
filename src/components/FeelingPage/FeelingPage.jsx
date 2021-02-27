import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Material UI
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
      <h4 id="feelingScore" className="feedbackQuestion">How are you feeling today?</h4>
      <Box display="flex" justifyContent="center">
        <RadioGroup row aria-label="FeelingScore" name="feeling" value={feelingScore} onChange={(event) => setFeelingScore(event.target.value)}>
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

export default FeelingPage;