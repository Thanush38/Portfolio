import React from 'react'
import {useState, useEffect} from 'react'
import Video from '../../Video/video.mp4'
import {Nav, HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Link, animateScroll as scroll } from 'react-scroll'
import {Button} from '../ButtonElement'
import './index.css'



const Hero = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
      setHover(!hover)
  }
  const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[]) 
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Thananjaya Sharma Dinesh</HeroH1>
            <HeroP>
            My Name is Thananjaya Sharma Dinesh, but I go by Thanush.
            </HeroP>
            <HeroBtnWrapper>
                <Link  activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="button-link">
                    More about me 
                </Link>
            </HeroBtnWrapper>
        </HeroContent>

      
    </HeroContainer>
  )
}

export default Hero
