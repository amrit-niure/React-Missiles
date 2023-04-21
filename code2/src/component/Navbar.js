import React from 'react'
import logo from '../Images/react-icon-small.png'
import '../index.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className="logo">
    <img src={logo} alt="" />
    <h3 className='facts'>ReactFacts</h3>
      </div>
    <h4 className='project'>React Course - Project 1</h4>
    </div>
  )
}

export default Navbar
