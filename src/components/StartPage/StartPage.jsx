import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
//Material UI
import Button from '@material-ui/core/Button';

function StartPage() {
  const history = useHistory();
  
  const onClick = () => {
    console.log('Start Page onClick');
    history.push('/feeling')
  } // end onClick

  return (
    <>
      <h3>Start Your Feedback!</h3>
      <Button onClick={onClick} color="primary" variant="contained">Start</Button>
    </>
  )
}

export default StartPage;