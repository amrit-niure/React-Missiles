import React from 'react'

function Jokes(props) {
  return (
    <div>
     <h3>{props.setup}</h3> 
     <p>{props.punchline}</p> 
    </div>
  )
}

export default Jokes
