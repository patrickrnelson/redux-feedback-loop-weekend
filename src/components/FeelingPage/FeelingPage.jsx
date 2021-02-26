import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function FeelingPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/understanding')
  }
  
  return (
    <>
    <label htmlFor="feelingScore">How are you feeling today?</label>
    <input id="feelingScore" type="number"/>
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default FeelingPage;