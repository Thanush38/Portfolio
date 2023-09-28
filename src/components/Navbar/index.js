import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa' 
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu,NavItem,NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[]) 
    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Dolla</NavLogo>
                <MobileIcon onClick={props.toggle}>
                <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem> 
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>    
                  <NavBtn>
                      <NavBtnLink to="/Contact">Sign In</NavBtnLink>
                  </NavBtn>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
