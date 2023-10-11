import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaGithub} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper, FooterLinksContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Thanush Dinesh
            </SocialLogo>
            <WebsiteRights>Thanush © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://github.com/Thanush38" target='_blank' arial-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/in/thanush-dinesh-848319290/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="#" target='_blank' arial-label='email' onClick={() => window.location = 'mailto:thanush38@outlook.com'}>
                <AiOutlineMail />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer