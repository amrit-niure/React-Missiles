import React from 'react'

function Jokes({setup,punchline,isPun}){

const [show, setShow] = React.useState(false)


function toggle(){
    setShow(prevValue=> !prevValue)
}
    return(
        <>
        <div className="template">
       
        <h3>{isPun}</h3>
       {setup && <h3>Setup : {setup}</h3>}
       {show && <p>Punchline: {punchline}</p>}
       <button onClick={toggle}>{ show ? "Hide" : "Show"} Punchline</button>
       {/* {!show && <button onClick={toggle}>Show Punchline</button>} least clever metheod haha */}
        </div>
        </>
    )
}

export default Jokes;