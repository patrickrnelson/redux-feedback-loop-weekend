import { useHistory } from 'react-router-dom';
// Material UI
import Button from '@material-ui/core/Button';

function ThankYouPage() {
  const history = useHistory();

  // send user back to the start page
  const onClick = () => {
    history.push('/')
  }

  return (
    <>
    <header className='App-header'>
      <h1 className='App-title'>Feedback!</h1>
      <h4 className="subtitle">Don't forget it!</h4>
    </header>
    <h2>Thank you!</h2>
    <Button onClick={onClick} color="secondary" variant="contained">Leave New Feedback</Button>
    </>
  )
}

export default ThankYouPage;