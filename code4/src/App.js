import React from 'react'
import Jokes from './Jokes'
import './index.css'

function App(){

    return(
        <>
        <Jokes
        num = {1}
        setup=" I got my daughter a fridge for her birthday." 
        punchline ="I can't wait to see her face light up when she opens it."
        comments={[
            "Haha ",
            "Very Funny ",
            "Nailed it ",
        ]}
        
        />

        <Jokes 
        num = {2}
        setup=" How did the hacker escape the police?"
         punchline ="He just ransomware!"

         />

        <Jokes 
        num = {3}
        setup="  Why don't pirates travel on mountain roads?"
         punchline =" Scurvy.
         "/>

        <Jokes 
        num = {4}
        setup=" Why do bees stay in the hive in the winter?"
         punchline =" Swarm."
         />

        <Jokes
        num = {5}
         setup=" What's the best thing about Switzerland?"
         punchline ="I don't know, but the flag is a big plus!"
         />
        </>
    )
}

export default App;