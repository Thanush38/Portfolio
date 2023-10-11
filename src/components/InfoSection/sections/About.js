import React from 'react'
import { Button } from '../../ButtonElement'
import { 
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    Column2,
    ImgWrap,
    Img
} from '../InfoSectionElements'
import Image from '../../../images/Vadi.png'
import './About.css'
import Pdf from '../../../Files/Resume.pdf'
const About = () => {
  return (
    <>
      <div style={{backgroundColor: '#0093E9', backgroundImage: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)'}} id={'about'}>
        <InfoWrapper>   
            <InfoRow imgStart={false}>
                <Column1>
                    <TextWrapper>
                        <Heading lightText={true}>About Me:</Heading>
                        <Subtitle darkText={false}>I am a second year university student currently pursuing a Bachelors in computer Science. I started having an interest in coding during covid lockdown when I had a lot of free time. Throughout the years I have gained exceptional skill in coding with a variety of languages such as Python, C++ java, Javascript and more.  </Subtitle>
                        <BtnWrap>
                            
                            <a href={Pdf} target="_blank" className="link" rel="noreferrer">My Resume</a>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <img src={Image} alt={'Profile Picture'} className='imgTag'/>
                    </ImgWrap>
                </Column2>

                </InfoRow>
        </InfoWrapper>
        </div>
    </>
  )
}

export default About
