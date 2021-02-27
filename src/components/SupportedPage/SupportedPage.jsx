import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Material UI
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

function SupportedPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [supportScore, setSupportScore] = useState(0);

  const onClick = () => {
    if(supportScore > 0 && supportScore < 6 ) {
      dispatch({
        type: 'SUPPORT_SCORE',
        payload: supportScore
    })
      history.push('/comments')
    }
    else {
      alert('Please choose a number between 1 and 5')
    }

    
  }

  return (
    <>
    <h4 id="supportScore" className="feedbackQuestion">How well are you being supported?</h4>
    <Box display="flex" justifyContent="center" mb={3}>
      <RadioGroup row aria-label="SupportScore" name="support" value={supportScore} onChange={(event) => setSupportScore(event.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="bottom"/>
        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="bottom"/>
        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="bottom"/>
        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="bottom"/>
        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="bottom"/>
      </RadioGroup>
    </Box>
    <Button onClick={onClick} color="primary">Next</Button>
    </>
  )
}

export default SupportedPage;