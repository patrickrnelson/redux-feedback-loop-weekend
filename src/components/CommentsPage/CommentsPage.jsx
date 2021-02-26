import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';

function CommentsPage() {
  const history = useHistory();


  const onClick = () => {
    history.push('/review')
  }

  return (
    <>
    <label htmlFor="commentsInput">Any comments you want to leave?</label>
    <input id="commentsInput" type="text"/>
    <button onClick={onClick}>Next</button>
    </>
  )
}

export default CommentsPage;