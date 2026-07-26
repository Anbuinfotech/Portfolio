import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
    <div className="page-shell">
    <Navbar></Navbar>
    <Hero></Hero>
    <Experience></Experience> 
    <Skills></Skills>  
    <Projects></Projects> 
    <Contact></Contact>
    </div>
  )
}

export default App
