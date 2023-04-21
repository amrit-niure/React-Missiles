import React from 'react'
import photo from "./images/photo-grid.png";
function Hero() {
  return (
    <section className='hero'>
       
      <img src={photo} alt=""  className='photo'/>

      
      <h1 className='head-text'>Online Experiences</h1>
      <p className='para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>

    </section>
  )
}

export default Hero
