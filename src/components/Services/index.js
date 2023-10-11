import React from 'react'
import pokeball from '../../images/pokeball.png'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP,SocialIcons, SocialIconLink } from './ServicesElements'
import {AiFillGithub} from 'react-icons/ai'
import {BsLink45Deg} from 'react-icons/bs'
import Tilt from 'react-parallax-tilt';
const Services = () => {
  return (
    <ServicesContainer id="projects">
        <ServicesH1>My Projects</ServicesH1>
        
        <ServicesWrapper>
            <Tilt glareEnable={true} tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={pokeball}/>
                <ServicesH2>Pokedex</ServicesH2>
                <ServicesP>Uses Reactjs and Pokeapi to get information on any pokemon. </ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://brilliant-clafoutis-295f30.netlify.app" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/pokedex" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt>
            <Tilt glareEnable={true} tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={pokeball}/>
                <ServicesH2>Pokedex</ServicesH2>
                <ServicesP>Uses Reactjs and Pokeapi to get information on any pokemon. </ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://brilliant-clafoutis-295f30.netlify.app" target='_blank' arial-label="Website">
                <BsLink45Deg />
              </SocialIconLink>
              <SocialIconLink href="https://github.com/Thanush38/pokedex" target='_blank' arial-label="Github">
                <AiFillGithub />
              </SocialIconLink>
              </SocialIcons>
            </ServicesCard>
            </Tilt><Tilt glareEnable={true} tiltMaxAngleX={10}  
        tiltMaxAngleY={10} perspective={1000} >
            <ServicesCard>
                <ServicesIcon src={pokeball}/>
                <ServicesH2>Pokedex</ServicesH2>
                <ServicesP>Uses Reactjs and Pokeapi to get information on any pokemon. </ServicesP>
                <SocialIcons>
                <SocialIconLink href="https://brilliant-clafoutis-295f30.netlify.app" target='_blank' arial-label="Website">
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
