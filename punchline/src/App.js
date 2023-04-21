
import './App.css';
import JokesData from './jokesData';
import Jokes from './Jokes';

export default function App() {
  const jokeElements = JokesData.map(joke => {
      return <Jokes setup = {joke.setup} punchline = {joke.punchline} />
  })
  console.log(jokeElements)
  return (
      <div>
          {jokeElements}
      </div>
  )
}
