import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
//Material UI
import Radio from '@material-ui/core/Radio';
import Box from '@material-ui/core/Box';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function FeelingPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [feelingScore, setFeelingScore] = useState(0);
  // set the open state for the error alert
  const [open, setOpen] = React.useState(false);

  // Alert for the MUI snackbar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const onClick = () => {
    if(feelingScore > 0 && feelingScore < 6) {
      dispatch({
        type: 'FEELING_SCORE',
        payload: feelingScore
      })
      history.push('/understanding')
    }
    else {
      setOpen(true)
    }
  }

  // handle the close for Material UI snackbar
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <>
      <h4 id="feelingScore" className="feedbackQuestion">How are you feeling today?</h4>
      <Box display="flex" justifyContent="center" mb={3}>
        <RadioGroup row aria-label="FeelingScore" name="feeling" value={feelingScore} onChange={(event) => setFeelingScore(event.target.value)}>
          <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement="bottom"/>
          <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement="bottom"/>
          <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement="bottom"/>
          <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement="bottom"/>
          <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement="bottom"/>
        </RadioGroup>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Please Select a Number
        </Alert>
      </Snackbar>
      <Button onClick={onClick} color="primary">Next</Button>
    </>
  )
}

export default FeelingPage;