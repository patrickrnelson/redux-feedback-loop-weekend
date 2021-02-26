import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function ThankYouPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/')
  }

  return (
    <>
    <h2>Thank you!</h2>
    <button onClick={onClick}>Leave New Feedback</button>
    </>
  )
}

export default ThankYouPage;