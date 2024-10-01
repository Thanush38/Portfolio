import React, {useState, useEffect} from 'react'
import pokeball from '../../images/pokeball.png'
import Quiz from '../../images/quiz.png'
import pyQt6 from '../../images/pythonQt6.png'
import face from '../../images/face.png'
import ECommerce from '../../images/ECommerce.png'
import DiscordBot from '../../images/DiscordBot.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,
    SocialIcons,
    SocialIconLink,
    TitleContainer
} from './projectElements'
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import Tilt from 'react-parallax-tilt';
import "./Projects.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = {
    "projects": [
        {
            "name": "ECommerce",
            "description": "An ecommerce web application built with React for the frontend and .NET for the backend.",
            "link": "",
            "github": "https://github.com/Thanush38/ECommerce",
            "image": ECommerce
        },
        {
            "name": "CodeBot",
            "description": "CodeBot is a Discord bot designed to help developers by generating code snippets in various programming languages based on user input.",
            "link": "",
            "github": "https://github.com/Thanush38/CodeBot",
            "image": DiscordBot
        },
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
        },
        {
            "name": "Pokedex",
            "description": "Uses Reactjs and Pokeapi to get information on any pokemon.",
            "link": "https://thanush-pokedex.netlify.app",
            "github": "https://github.com/Thanush38/pokedex",
            "image": pokeball
        }
    ]
}


const Services = () => {
    const [current, setCurrent] = useState(0)
    const [slide, setSlide] = useState(true);
    const [leftLock, setLeftLock] = useState(true);
    const [rightLock, setRightLock] = useState(false);
    const [fade, setFade] = useState(false);
    const totalItems = data.projects.length;

    // Update to trigger fade transition
    const setSlideTimeout = () => {
        return new Promise((resolve) => {
            setSlide(false); // Start slide-out animation
            const timeout = setTimeout(() => {
                setSlide(true); // After 500ms, set slide-in
                resolve();      // Resolve after animation completes
            }, 1000);
            return () => clearTimeout(timeout);
        });
    };
    const setStatus = () => {
        console.log(current)
        if(current === 0) {
            setLeftLock(true);
            setRightLock(false);
        } else if(current === data.projects.length - 3) {
            setRightLock(true);
            setLeftLock(false);
        } else {
            setLeftLock(false);
            setRightLock(false);
        }
    }

    const increment = async () => {
        await setSlideTimeout();
        if (current >= 3) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
        setStatus()
    }
    const decrement = async () => {
        await setSlideTimeout();
        if (current <= 0) {
            setCurrent(data.projects.length - 3)
        } else {
        setCurrent(current - 1)
        }
        setStatus()
    }
    const getClassName = (index) => {
        const adjustedIndex = index % totalItems;

        // Determine if the index is within the range of current and the next two
        // if (
        //     (adjustedIndex >= current && adjustedIndex < current + 3) ||
        //     (current + 3 > totalItems && adjustedIndex < (current + 3) % totalItems)
        // ) {
        //     return "animateCardMove" + (slide ? " slide-in" : " slide-out");
        // } else {
        //     return "animateCardMove hideCard" + (slide ? " slide-in" : " slide-out");
        // }
        if (
            (adjustedIndex >= current && adjustedIndex < current + 3) ||
            (current + 3 > totalItems && adjustedIndex < (current + 3) % totalItems)
        ) {
            return "animateCardFade" + (slide ? " fade-in" : " fade-out");
        } else {
            return "animateCardFade hideCard" + (slide ? " fade-in" : " fade-out");
            return "animateCardMove hideCard" + (slide ? " slide-in" : " slide-out");
        }

    };
    return (
        <ServicesContainer id="projects">
            <div className={"TitleContainer"}>
                <div className={"ServicesH1"}>My Projects</div>
            </div>
            <div className={"ProjectSlider"}>

                <div className={`arrow ${leftLock ? 'disabled' : ''}`} onClick={decrement}>
                    <div className="arrow-top arrow-top-left"></div>
                    <div className="arrow-bottom arrow-bottom-left"></div>
                </div>

                <div className={`ServicesWrapper`}>
                    {data.projects.map((project, index) => {
                            console.log(project.name)
                            return (
                                <div className={`${getClassName(index)}`}>
                                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
                                        <div className={"ServicesCard"} key={index}>
                                            <ServicesIcon src={project.image}/>
                                            <ServicesH2>{project.name}</ServicesH2>
                                            <ServicesP>{project.description}</ServicesP>
                                            <SocialIcons>
                                                {project.link !== "" && (
                                                    <SocialIconLink href={project.link} target='_blank' aria-label="Website">
                                                        <BsLink45Deg />
                                                    </SocialIconLink>
                                                )}
                                                <SocialIconLink href={project.github} target='_blank'
                                                                aria-label="Github">
                                                    <AiFillGithub/>
                                                </SocialIconLink>
                                            </SocialIcons>
                                        </div>
                                    </Tilt>
                                </div>
                            );
                        })}

                </div>

                <div className={`arrow ${rightLock ? 'disabled' : ''}`} onClick={increment}>
                    <div className="arrow-top arrow-top-right"></div>
                    <div className="arrow-bottom arrow-bottom-right"></div>
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

// <div className={`ServicesWrapper`}>
// {data.projects.length > 0 &&
// data.projects.slice(current, current + 3).concat(data.projects.slice(0, (current + 3) % data.projects.length)).slice(0, 3).map((project, index) => {
//     console.log(project.name)
//     return (
//         <div className={`${getClassName(index)}`}>
//             <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
//                 <div className={"ServicesCard"} key={index} >
//                     <ServicesIcon src={project.image}/>
//                     <ServicesH2>{project.name}</ServicesH2>
//                     <ServicesP>{project.description}</ServicesP>
//                     <SocialIcons>
//                         <SocialIconLink href={project.link} target='_blank' aria-label="Website">
//                             <BsLink45Deg/>
//                         </SocialIconLink>
//                         <SocialIconLink href={project.github} target='_blank' aria-label="Github">
//                             <AiFillGithub/>
//                         </SocialIconLink>
//                     </SocialIcons>
//                 </div>
//             </Tilt>
//         </div>
//     );
// })}
//
// </div>