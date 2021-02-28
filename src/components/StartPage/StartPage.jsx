import { useHistory } from 'react-router-dom';
//Material UI
import Button from '@material-ui/core/Button';

function StartPage() {
  const history = useHistory();
  
  // on click, send user to feeling page
  const onClick = () => {
    console.log('Start Page onClick');
    history.push('/feeling')
  } // end onClick

  return (
    <>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4 className="subtitle">Don't forget it!</h4>
      </header>
      <h3>Start Your Feedback!</h3>
      <Button onClick={onClick} color="primary" variant="contained">Start</Button>
    </>
  )
}

export default StartPage;