import React from 'react'


function Meme() {
 
  const [allMemeImages, setAllMemeImages] = React.useState([])

  function getMemeImage(){
    const randomNumber = Math.floor(Math.random()*allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme((prevState)=>{
      return {
        ...prevState,
        randomImage:url
      }
    })
    // setMemeImage(allMemeImages[randomNumber].url)
    
  // const {url} = allMemeImages[randomNumber]    ----------- object destructuring-----------
  // console.log(url)
}
React.useEffect(()=>{

  fetch("https://api.imgflip.com/get_memes")
  .then(data=>{
    if(!data.ok){
      throw new Error("Network response was not ok")
    }
    else{
      return data.json()
    }
  })
  // .then(data=> data.json())
  
  .then(data=> setAllMemeImages(data.data.memes))


.catch(error=>{
  console.error("There was a problem with the fetch operation:",error)
})
 

// without error handling 
// fetch("https://api.imgflip.com/get_allMemeImages")
//   .then(data=> data.json())
//   .then(data=> console.log(data))

  // using async function . Async function always returns a promise so we cannot return a side effect cleanup fucntion just in case we need to clean up the error cause by use effect function 
  // so we cannot make the call back function async because of that above mentioned resaon. so to use async and await we need to define another aysnc fucntion to the same job which returns its own promise and the main callback function can return the another function that cleans up the error  caused by the useeffect function . 
  //  funny thing is useEffect is used to tackle the side effects of react but even use effect has its own side effects . that means the medicine we take to remove the sideeffects also have sideeffects.  
  // async function takeData(){
    
  //   const res =await fetch("https://api.imgflip.com/get_memes") 
  //   const data = await res.json()
  //   setAllMemeImages(data.data.memes)
  // }
  // takeData()
},[])


const [meme, setMeme] = React.useState(
  {
    topText : "",
    bottomText : "",
    randomImage :""
  }
)

function onChangeHandler(event){
  const {name,value} = event.target 
  setMeme(prevState=>{
    return {
      ...prevState,
      [name]:value
    }
  })

}

// const [memeImage, setMemeImage] = React.useState()

  return (
  <div className='main-section'>
    <div className='form'>
        <div className='input'>
        <input 
        type="text" 
        placeholder='Shut up' 
        name="topText"
        onChange={onChangeHandler}

    
        />
        <input 
        type="text" 
        placeholder='and take my money'
        name="bottomText"
        onChange={onChangeHandler}
        />
        </div>
        <button className='btn' onClick={getMemeImage} >Get a new meme image 🖼</button>
        {/* <img src={memeImage} alt="" className='meme-image'/> */}
      
    </div>
    <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
    </div>
  )
}

export default Meme




