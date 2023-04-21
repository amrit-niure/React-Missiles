import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.js'
import Footer from './Footer.js'
import Content from './Content.js'

import './index.css'


function Page()  {
  return (
    <>
   <Header />
  <Content />
   <Footer />
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Page />
)