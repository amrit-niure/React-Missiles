
import starImage from './images/star.png'


import React from 'react'

function Card(props) {
  console.log(props.rating)
  let badgeText 
  if (props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.location === 'Online'){
    badgeText = 'ONLINE'
  } else{
    badgeText = null
  }

  return (
    <section className='card'> 
      { badgeText  && <div className="status">{badgeText}</div>}
      <img src={props.coverImg} alt="" className='main-image-card' />
      <div className="rating-section">
        <img src={starImage} alt="" className="one star" />
        <span className="one rating--number">{props.stats.rating}</span>
        <span className="one another--number">({props.stats.reviewCount}) • </span>
        <span className="one country">{props.location}</span>
      </div>
      <div className="quote">{props.title}</div>
      <div className="rate"><b>Form {props.price} /</b> person</div>
    </section>
  )
}

export default Card
// --------------------item = {element}-----way -----------
// import starImage from './images/star.png'


// import React from 'react'

// function Card(props) {
//   console.log(props.item.rating)
//   let badgeText 
//   if (props.item.openSpots === 0){
//     badgeText = "SOLD OUT"
//   } else if (props.item.location === 'Online'){
//     badgeText = 'ONLINE'
//   } else{
//     badgeText = null
//   }

//   return (
//     <section className='card'> 
//       { badgeText  && <div className="status">{badgeText}</div>}
//       <img src={props.item.coverImg} alt="" className='main-image-card' />
//       <div className="rating-section">
//         <img src={starImage} alt="" className="one star" />
//         <span className="one rating--number">{props.item.stats.rating}</span>
//         <span className="one another--number">({props.item.stats.reviewCount}) • </span>
//         <span className="one country">{props.item.location}</span>
//       </div>
//       <div className="quote">{props.item.title}</div>
//       <div className="rate"><b>Form {props.item.price} /</b> person</div>
//     </section>
//   )
// }

// export default Card
