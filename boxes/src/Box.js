import React from 'react'

function Box(props) {

    const styles ={
        backgroundColor: props.on ? "#461C7C" : "transparent",
        // boxShadow:  props.on ? "0 4px 30px rgba(255, 0, 0, 0.1)" : "none"

    }
  return (
    <div className='box' style = {styles} onClick={()=> props.toggle(props.id)}>
     
    </div>
  )
}

export default Box
