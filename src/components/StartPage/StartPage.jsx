import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function StartPage() {
  const history = useHistory();
  
  const onClick = () => {
    console.log('Start Page onClick');
    history.push('/feeling')
  } // end onClick

  return (
    <>
      <h3>Start Your Feedback!</h3>
      <button onClick={onClick}>Start</button>
    </>
  )
}

export default StartPage;