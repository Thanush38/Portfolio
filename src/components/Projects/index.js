import React from 'react'
import pokeball from '../../images/pokeball.png'
import Quiz from '../../images/quiz.png'
import pyQt6 from '../../images/pythonQt6.png'
import face from '../../images/face.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,SocialIcons, SocialIconLink, TitleContainer } from './projectElements'
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import Tilt from 'react-parallax-tilt';
import "./Projects.css"

const data = {
    "projects": [
        {
            "name": "PyQt6 Multi GUI application",
            "description": "Uses Python and PyQt6 library to implement a multiple use app that can perform functions such as youtube to mp4 downloader and a url shortener.",
            "link": "https://drive.google.com/file/d/1iHeW5zUUnXNw64RBAYa7Md2X14gpi-Nx/view?usp=sharing",
            "github": "https://github.com/Thanush38/multiGuiApp",
            "image": pyQt6
        },
        {
            "name": "Quiz Game",
            "description": "A Quiz game built with NodeJs, ExpressJs and MongoDB. Uses RestAPI to fetch questions from online and uses MongoDB to store high scores.",
            "link": "https://node-quiz-48f2858a076b.herokuapp.com",
            "github": "https://node-quiz-48f2858a076b.herokuapp.com",
            "image": Quiz
        },
        {
            "name": "Face Detector",
            "description": "A machine learning web application built with HTML5 and Javascript. It Can analyze face and detect mood with using in scan of eyes and mouth",
            "link": "https://thanush-face-detector.netlify.app/",
            "github": "https://github.com/Thanush38/JavaScript-face-detector",
            "image": face
        }
        ]
}

const Services = () => {
  return (
      <ServicesContainer id="projects">
          <div className={"TitleContainer"}>
              <div className={"ServicesH1"}>My Projects</div>
          </div>
          <div className={"ProjectSlider"}>

          <div className="arrow">
              <div className="arrow-top"></div>
              <div className="arrow-bottom"></div>
          </div>
          <div className={"ServicesWrapper"}>
              {data.projects.map((project, index) => {
                      return (
                          <Tilt tiltMaxAngleX={10}
                                tiltMaxAngleY={10} perspective={1000}>
                              <div className={"ServicesCard"}>
                                  <ServicesIcon src={project.image}/>
                                  <ServicesH2>{project.name}</ServicesH2>
                                  <ServicesP>{project.description}</ServicesP>
                                  <SocialIcons>
                                      <SocialIconLink href={project.link} target='_blank' arial-label="Website">
                                          <BsLink45Deg/>
                                      </SocialIconLink>
                                      <SocialIconLink href={project.github} target='_blank' arial-label="Github">
                                          <AiFillGithub/>
                                      </SocialIconLink>
                                  </SocialIcons>
                              </div>
                          </Tilt>
                      )
                  }
              )}
          </div>
              <div className="arrow">
                  <div className="arrow-top"></div>
                  <div className="arrow-bottom"></div>
              </div>
            </div>



      </ServicesContainer>
  )
}

export default Services


// <Tilt  tiltMaxAngleX={10}
// tiltMaxAngleY={10} perspective={1000} >
//     <ServicesCard>
//     <ServicesIcon src={pokeball}/>
// <ServicesH2>Pokedex</ServicesH2>
// <ServicesP>Uses Reactjs and Pokeapi to get information on any pokemon. </ServicesP>
// <SocialIcons>
//     <SocialIconLink href="https://thanush-pokedex.netlify.app" target='_blank' arial-label="Website">
//         <BsLink45Deg />
//     </SocialIconLink>
//     <SocialIconLink href="https://github.com/Thanush38/pokedex" target='_blank' arial-label="Github">
//         <AiFillGithub />
//     </SocialIconLink>
// </SocialIcons>
// </ServicesCard>
// </Tilt>