import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

function CommentsPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [comments, setComments] = useState('');

  const onClick = () => {
    if(comments !== '') {
      dispatch({
        type: 'COMMENTS_INPUT',
        payload: comments
      })
      history.push('/review')
    }
    else {
      alert('Write something, please!')
    }
  }

  return (
    <>
    <h4 id="comments" className="feedbackQuestion">Any comments you want to leave?</h4>
    <TextField
          id="comments-box"
          label="Additional Comments"
          multiline
          rows={3}
          variant="outlined"
          value={comments}
          onChange={(event) => setComments(event.target.value)} 
        />
        <br/>
    {/* <input 
      id="commentsInput" 
      type="text"
      value={comments}
      onChange={(event) => setComments(event.target.value)} /> */}
    <button className="nextBtn" onClick={onClick}>Next</button>
    </>
  )
}

export default CommentsPage;