import React from 'react'
import pokeball from '../../images/pokeball.png'
import Quiz from '../../images/quiz.png'
import pyQt6 from '../../images/pythonQt6.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,SocialIcons, SocialIconLink } from './projectElements'
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import Tilt from 'react-parallax-tilt';
const Services = () => {
  return (
    <ServicesContainer id="projects">
        <ServicesH1>My Projects</ServicesH1>
        
        <ServicesWrapper>
            <Tilt  tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={pokeball}/>
                <ServicesH2>Pokedex</ServicesH2>
                <ServicesP>Uses Reactjs and Pokeapi to get information on any pokemon. </ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://thanush-pokedex.netlify.app" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/pokedex" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt>
            <Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={pyQt6}/>
                <ServicesH2>PyQt6 Multi GUI application</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>Uses Python and PyQt6 libray to implement a multiple use app that can perform functions such as youtube to mp4 downloader and a url shortener.</ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://drive.google.com/file/d/1iHeW5zUUnXNw64RBAYa7Md2X14gpi-Nx/view?usp=sharing" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/multiGuiApp" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt><Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={Quiz}/>
                <ServicesH2>Quiz Game</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>A Quiz game with HTML, CSS and JavaScript. Uses api to fetch questions from online and stores high scores.</ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://thanush-quiz.netlify.app/" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/javascript-quiz-app" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt>


        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
