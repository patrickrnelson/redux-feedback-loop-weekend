import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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
    <label htmlFor="commentsInput">Any comments you want to leave?</label>
    <input 
      id="commentsInput" 
      type="text"
      value={comments}
      onChange={(event) => setComments(event.target.value)} />
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default CommentsPage;