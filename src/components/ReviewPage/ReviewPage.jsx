import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function ReviewPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/thankyou')
  }

  return (
    <>
    <h3>Review Your Submission</h3>

    <button onClick={onClick}>Submit!</button>
    </>
  )
}

export default ReviewPage;