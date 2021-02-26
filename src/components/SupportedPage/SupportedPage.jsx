import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function SupportedPage() {
  const history = useHistory();

  const onClick = () => {
    history.push('/comments')
  }

  return (
    <>
    <label htmlFor="supportedScore">How well are you being supported?</label>
    <input id="supportedScore" type="number"/>
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default SupportedPage;