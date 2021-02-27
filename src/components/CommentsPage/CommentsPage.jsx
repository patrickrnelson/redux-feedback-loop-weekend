import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function CommentsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [comments, setComments] = useState('');
  const [open, setOpen] = React.useState(false);

  // Alert for the MUI snackbar
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const onClick = () => {
    if(comments !== '') {
      dispatch({
        type: 'COMMENTS_INPUT',
        payload: comments
      })
      history.push('/review')
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