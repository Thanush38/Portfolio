import React from 'react'
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
    Img,
    ImgWrap,
} from '../InfoSectionElements'
import skillImage from '../../../images/skils.png'
import './About.css'
const Skills = () => {
  return (
    <>
      <InfoContainer lightBg={true} id='skills'>
        <InfoWrapper>   
            <InfoRow imgStart={true}>
                <Column1>
                    <TextWrapper>
                        <Heading lightText={false}>My Skills</Heading>
                        <Subtitle darkText={true ? 1:0}>Throughout the years I have learned many languages such as Javascript,Python,C++ and more as well as learning some frameworks and multiple libraries in each language. Some of my most strongest languages and frameworks can be seen to the left. You can also view some of my work at my <a href="https://www.github.com/thanush38" target="_blank">github</a>. </Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <img src={skillImage} alt="Skills" className='imgTag'/>
                    </ImgWrap>
                </Column2>

                </InfoRow>
        </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default Skills
