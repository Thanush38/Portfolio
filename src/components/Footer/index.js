import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {
  FooterContainer,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterContent,
  FooterText
} from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterContent>
          <SocialLogo to='/' onClick={toggleHome}>
            Thanush Dinesh
          </SocialLogo>
          <FooterText>
            Passionate about creating innovative solutions and pushing the boundaries of technology.
          </FooterText>
        </FooterContent>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialIcons>
              <SocialIconLink href="https://github.com/Thanush38" target='_blank' aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/thanush-dinesh-848319290/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="#" aria-label='email' onClick={(e) => {e.preventDefault(); window.location.href = 'mailto:thanush38@outlook.com';}}>
                <AiOutlineMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
        <WebsiteRights>Thanush Dinesh © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer