import './App.css';
import React from 'react';


function App() {

const [value, setValue] = React.useState({
  firstName:"",
  lastName:"",
  email:"",
  password:"",
  newsletter:true,
  employment:'',
  favColor:""
})

function onSubmitHandler(event){
  event.preventDefault()
  alert("Form Submitted")
}

function onChangeHandler(event){
const {name,value,type,checked} = event.target
  setValue(prevState=>{
    return {
      ...prevState,
      [name]:type==="checkbox"? checked: value
    }
  })
}

console.log(value.favColor)
  return (
    <div className="App">
    <p>-- Form --</p>

    <div className="app">
      <form onSubmit={onSubmitHandler} className='form--section'>

<div className="name-section">
    <input 
    type="text" 
    placeholder='First Name'
    name='firstName'
    value={value.firstName}
    onChange={onChangeHandler}
    className='name-section-input'
    />
    <input 
    type="text" 
    placeholder='Last Name'
    name='lastName'
    value={value.lastName}
    onChange={onChangeHandler}
    className='name-section-input'
    />
</div>


  <div className="email-section">
    <input 
    type="email" 
    placeholder='Email'
    name='email'
    value={value.email}
    onChange={onChangeHandler}
    className='email-section-input'
    />
    </div>




    <div className="password-section">
    <input 
    type="password" 
    placeholder='Password'
    name='password'
    value={value.password}
    onChange={onChangeHandler}
    className='password-section-input'
    />
    <input 
    type="password" 
    placeholder='Confirm Password'
    name='confirmPassowrd'
    value={value.confirmPassword}
    onChange={onChangeHandler}
    className='password-section-input'
    />
</div>



<div className="newsletter-section">
    <input 
    type="checkbox" 
    name='newsletter'
    id='news'
    checked={value.newsletter}
    onChange={onChangeHandler}
    className='newsletter-section-input'
    />
    
    <label htmlFor="news" className='newsletter-section-input'>Subscribe to Newsletter</label>
    </div>

 

    <div className="employment-section">
      
<div className="employment-input-section">

    <input 
    type="radio" 
    name='employment'
    id='full-time'
    value="full-time" 
    onChange={onChangeHandler}
    

    />
    <label htmlFor="full-time">Full Time</label>
</div>

    <div className="employment-input-section">

    <input 
    type="radio" 
    name='employment'
    id='part-time'
    value="part-time"
    onChange={onChangeHandler}
    

    />
    <label htmlFor="part-time">Part Time</label>
    </div>
<div className="employment-input-section">

    <input 
    type="radio" 
    name='employment'
    id='unemployment'
    value="Unemployment"
    onChange={onChangeHandler}
   

    />
    <label htmlFor="unemployment">UnEmployed</label>
</div>

    </div>

    <div className="favColor-section">


    <label htmlFor="favColor">What is your favorite color?</label>
    <select 
    name="favColor" 
    value={value.favColor}
    id="favColor"
    onChange={onChangeHandler}
    className='favColor-section-input'
    >

    <option value="">-- Choose --</option>
    <option value="Red">Red</option>
    <option value="Black">Black</option>
    <option value="Blue">Blue</option>
    <option value="White">White</option>

    </select>
    </div>

<button>Submit</button>
      </form>
    </div>
    <p>--Created with React Js--</p>
    </div>
  );
}

export default App;
