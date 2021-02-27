import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function ReviewPage() {
  const history = useHistory();
  const feedbackSubmission = useSelector(store => store.feedbackReducer);

  const onClick = () => {
    axios.post('/feedback', {
      feeling: feedbackSubmission.feeling,
      understanding: feedbackSubmission.understanding,
      support: feedbackSubmission.support,
      comments: feedbackSubmission.comments
    })
    .then((res) => {
      console.log('Successful POST', res);
      history.push('/thankyou')
      dispatch ({
        type: 'CLEAR_FEEDBACK'
      })
      .catch((err) => {
        console.log('Error in POST', err);
      })
    });
    
  }

  return (
    <>
    <h3>Review Your Submission</h3>

    <div>
      <h4>Feeling</h4>
      <p>{feedbackSubmission.feeling}</p>
    </div>
    <div>
      <h4>Understanding</h4>
      <p>{feedbackSubmission.understanding}</p>
    </div>
    <div>
      <h4>Support</h4>
      <p>{feedbackSubmission.support}</p>
    </div>
    <div>
      <h4>Comments</h4>
      <p>{feedbackSubmission.comments}</p>
    </div>

    <button onClick={onClick}>Submit!</button>
    </>
  )
}

export default ReviewPage;