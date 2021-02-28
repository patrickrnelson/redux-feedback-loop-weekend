import React, { useState, useEffect } from 'react';
import axios from 'axios';
// Material UI
import Box from '@material-ui/core/Box';

function Admin() {

const [allFeedback, setAllFeedback] = useState([]);

useEffect(() => {
  console.log('in Admin Page');
  getAllFeedback();
}, []);

const getAllFeedback = () => {
  axios.get('/feedback')
  .then((response) => {
    console.log('Successful Admin GET', response.data);
    setAllFeedback(response.data)
  })
  .catch((err) => {
    console.log('Error in Admin GET', err);
  })
}

const onDelete = () => {
  axios.delete('/feedback/:id')
  .then((response) => {
    console.log('Successful DELETE');
  })
  .catch((err) => {
    console.log('Error in Delete', err);
  })
}

  return (
    <>
    <header className='Admin-header'>
      <h1 className='App-title'>Admin!</h1>
      <h4 className="subtitle">Don't forget to check feedback!</h4>
    </header>
    
    <Box display="flex" justifyContent="center">
    <table id="admin-table">
      <thead>
        <tr>
          <td>Date</td>
          <td>Feeling</td>
          <td>Understanding</td>
          <td>Support</td>
          <td>Comments</td>
          <td>Flag</td>
        </tr>
      </thead>
      <tbody>
        {allFeedback.map(feedback => {
          return (
            <tr key={feedback.id}>
              <td>{feedback.date}</td>
              <td>{feedback.feeling}</td>
              <td>{feedback.understanding}</td>
              <td>{feedback.support}</td>
              <td>{feedback.comments}</td>
              <td>{feedback.flag}</td>
              <td><button onClick={onDelete}>Delete</button></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    </Box>
    </>
  )
}

export default Admin;