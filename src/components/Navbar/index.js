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
        <IconContext.Provider value={{color: '#000'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Thanush Dinesh</NavLogo>
                <MobileIcon onClick={props.toggle} >
                <FaBars  />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skills</NavLinks>
                    </NavItem>
                    <NavItem> 
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                    </NavItem>
                </NavMenu>    
                  <NavBtn>
                      <NavBtnLink to="/Contact">Contact</NavBtnLink>
                  </NavBtn>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </>
  )
}

export default Navbar
