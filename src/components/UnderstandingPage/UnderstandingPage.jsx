import { useHistory } from 'react-router-dom';
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

function UnderstandingPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  // local state to track the inputted score
  const [understandingScore, setUnderstanding] = useState(0);
  // set the open state for the error alert
  const [open, setOpen] = React.useState(false);

  // Alert for the MUI snackbar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  // onClick
  // Send the input to the feedback reducer
  // and send user to the next page (supported)
  const onClick = () => {
    if(understandingScore > 0 && understandingScore < 6) {
      dispatch({
        type: 'UNDERSTANDING_SCORE',
        payload: understandingScore
      })
      history.push('/supported')
    }
    // if score is not between 1 and 5, open an error message
    else {
      setOpen(true)
    }
  }

  // handle the close for Material UI alert
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4 className="subtitle">Don't forget it!</h4>
    </header>
    <h4 id="understandingScore" className="feedbackQuestion">How well are you understanding the content?</h4>
    <Box display="flex" justifyContent="center" mb={3}>
      <RadioGroup row aria-label="UnderstandingScore" name="understanding" value={understandingScore} onChange={(event) => setUnderstanding(event.target.value)}>
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

export default UnderstandingPage;