import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      
     
    </div>
  )
}

export default App
