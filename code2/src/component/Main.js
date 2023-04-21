import React from 'react'
import back from '../Images/logo512.png'
function Main() {
  return (
    <div className='content'>
    <h1 className='heading'>Fun facts about React</h1>
    <ul className='points-wrap'>
      <li className="points">Was first released in 2013</li>
      <li className="points">Was originally created by Jordan Walke</li>
      <li className="points">Has well over 100K stars on GitHub</li>
      <li className="points">Is maintained by Facebook</li>
      <li className="points">Powers thousand of enterprise apps, including mobile apps</li>
    </ul>

    <img src={back} alt="" className="back" />
    </div>
  )
}

export default Main
