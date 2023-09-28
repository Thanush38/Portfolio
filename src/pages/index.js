import React from 'react'
import {useState} from 'react'
import SideBar from '../components/SideBar'
import  Navbar from '../components/Navbar'
import Hero from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { homeObjOne,homeObjTwo, homeObjThree } from '../components/InfoSection/Data'

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
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services></Services>
      <InfoSection {...homeObjThree}/>
      <Footer></Footer>
      
    </>
  )
}

export default Home
