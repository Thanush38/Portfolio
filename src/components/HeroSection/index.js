import React from 'react'
import {useState} from 'react'
import Video from '../../Video/video.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import {Button} from '../ButtonElement'
const Hero = () => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
      setHover(!hover)
  }
  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseExit={onHover} primary='true' dark='true'>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>

      
    </HeroContainer>
  )
}

export default Hero
