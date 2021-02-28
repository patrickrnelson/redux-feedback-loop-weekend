import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Material UI
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function CommentsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  // local state to track the comments
  const [comments, setComments] = useState('');
  // set the open state for the error alert
  const [open, setOpen] = React.useState(false);

  // Alert for the MUI snackbar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  // onClick
  // Send the input to the feedback reducer
  // and send user to the next page (review)
  const onClick = () => {
    if(comments !== '') {
      dispatch({
        type: 'COMMENTS_INPUT',
        payload: comments
      })
      history.push('/review')
    }
    // if score is not between 1 and 5, open an error message
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
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4 className="subtitle">Don't forget it!</h4>
    </header>
    <h4 id="comments" className="feedbackQuestion">Any comments you want to leave?</h4>
    <Box mb={1}>
    <TextField
          id="comments-box"
          label="Additional Comments"
          multiline
          rows={3}
          variant="outlined"
          style = {{width: 350}}
          value={comments}
          onChange={(event) => setComments(event.target.value)} 
        />
        </Box>
        <br/>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            Please Enter A Comment
          </Alert>
        </Snackbar>
    {/* <input 
      id="commentsInput" 
      type="text"
      value={comments}
      onChange={(event) => setComments(event.target.value)} /> */}
    <Button onClick={onClick} color="primary">Next</Button>
    </>
  )
}

export default CommentsPage;