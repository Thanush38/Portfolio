import React from 'react'
import {useState} from 'react'
import SideBar from '../components/SideBar'
import  Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
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
      <Services></Services>
      <Footer></Footer>
      
    </>
  )
}

export default Home
