import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function UnderstandingPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/supported')
  }

  return (
    <>
    <label htmlFor="understandingScore">How well are you understanding the content?</label>
    <input id="understandingScore" type="number"/>
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default UnderstandingPage;