import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
// Material UI
import Button from '@material-ui/core/Button';

function ThankYouPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/')
  }

  return (
    <>
    <h2>Thank you!</h2>
    <Button onClick={onClick} color="secondary" variant="contained">Leave New Feedback</Button>
    </>
  )
}

export default ThankYouPage;