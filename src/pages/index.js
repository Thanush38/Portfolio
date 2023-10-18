import React from 'react'
import {useState} from 'react'
import SideBar from '../components/SideBar'
import  Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from '../components/InfoSection/sections/About'
import Skills from '../components/InfoSection/sections/Skills'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }


  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Navbar  toggle={toggle}/>
      <Hero />
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
      
    </>
  )
}

export default Home
