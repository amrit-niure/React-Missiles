import React from 'react'

export default function Header(){
    return (
   
       <header>
        <nav className='nav-items'>
          <img src="./logo192.png" alt="" className='logo'/>
         <ul className='nav-list'>
          <li className='list-items'>Pricing</li>
          <li className='list-items'>About</li>
          <li className='list-items'>Contact</li>
         </ul>
        </nav>
      </header>
      
    )
  }


