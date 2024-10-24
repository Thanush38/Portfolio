import React from 'react'
import { 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    Heading, 
    Subtitle, 
    BtnWrap,
    Column2,
    ImgWrap,
} from '../InfoSectionElements'
import Image from '../../../images/new.png'
import './About.css'
import Pdf from '../../../Files/ThananjayaResume.pdf'

const About = () => {
  return (
    <>
      <div className='background' id='about'>
        <InfoWrapper>   
            <InfoRow imgStart={false}>
                <Column1>
                    <TextWrapper>
                        <Heading lightText={false}>About Me</Heading>
                        <Subtitle darkText={true}>
                            <p>Hey there! 👋 I'm on an exciting tech journey:</p>
                            <ul className="about-list">
                                <li>🎓 Third-year university student pursuing a Bachelor's in Computer Science</li>
                                <li>💻 Navigating the wild world of programming languages and frameworks</li>
                                <li>🦾 Adapting and thriving amidst the challenges of the COVID era</li>
                                <li>🚀 Embodying resilience and determination in my educational odyssey</li>
                                <li>🌟 Turning obstacles into opportunities for growth and learning</li>
                            </ul>
                        </Subtitle>
                        <BtnWrap>
                            <a href={Pdf} target="_blank" className="link" rel="noreferrer">My Resume</a>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <div className="image-container">
                            <img src={Image} alt='Profile Picture' className='imgTag'/>
                        </div>
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
      </div>
    </>
  )
}

export default About