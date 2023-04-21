import React from 'react';
import './App.css';
import boxes from './boxes';
import Box from './Box';

function App() {

const [values,setValues] = React.useState(boxes)

const valueElements = values.map(value=>{
  return <Box on = {value.on} toggle={toggle} id = {value.id} />
})

function toggle(id){
 setValues(prevValue=>{
  return prevValue.map(each=>{
    return each.id === id ? {...each, on:!each.on} : {...each}
  })
 })
}
  return (
    <div className="App" >
      <div className="app">
      {valueElements}
      </div>
    </div>
  );
}

export default App;
