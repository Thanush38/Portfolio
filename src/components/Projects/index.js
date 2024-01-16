import React from 'react'
import pokeball from '../../images/pokeball.png'
import Quiz from '../../images/quiz.png'
import pyQt6 from '../../images/pythonQt6.png'
import face from '../../images/face.png'
import analyses from '../../images/data.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,SocialIcons, SocialIconLink, TitleContainer } from './projectElements'
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import Tilt from 'react-parallax-tilt';
const Services = () => {
  return (
    <ServicesContainer id="projects">
      <TitleContainer>
        <ServicesH1>My Projects</ServicesH1>
      </TitleContainer>
        <ServicesWrapper>
            
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
            </Tilt>
            <Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={Quiz}/>
                <ServicesH2>Quiz Game</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>A Quiz game built with NodeJs, ExpressJs and MongoDB. Uses RestAPI to fetch questions from online and uses MongoDB to store high scores.</ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://thanush-quiz.netlify.app/" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/node-quiz" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt>
            <Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={face}/>
                <ServicesH2>Face Detector</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>A machine learning web application built with HTML5 and Javascript. It Can analyze face and detect mood with using in scan of eyes and mouth </ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://thanush-face-detector.netlify.app/" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/JavaScript-face-detector" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt>
            
            <Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={analyses}/>
                <ServicesH2>Sugar-Sweetened Beverage Consumption Analysis</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>An analysis of sugar-sweetened beverage consumption utilizing Python with the Pandas and Matplotlib's library for enhanced professional insights.</ServicesP>
                
              <SocialIconLink href="https://github.com/Thanush38/Sugar-consumption" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
            </ServicesCard>
            </Tilt>
            <Tilt tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={"https://img.icons8.com/external-solid-design-circle/512/external-Speech-To-Text-artificial-intelligence-solid-design-circle.png"}/>
                <ServicesH2>Speech Recognition App</ServicesH2>
                <ServicesP style={{fontSize:"0.75rem"}}>A sleek Speech recognition app created using .NET framework for converting speech to text and speaking out typed text.</ServicesP>
                
              <SocialIconLink href="https://github.com/Thanush38/SpeechToText" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
            </ServicesCard>
            </Tilt>
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


        </ServicesWrapper>
      
    </ServicesContainer>
  )
}

export default Services
