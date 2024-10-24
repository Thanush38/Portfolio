import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa' 
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
import logo from '../../images/black.png'
import './Navbar.css'

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
        return () => {
            window.removeEventListener('scroll', changeNav)
        }
    },[]) 
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <>
            <IconContext.Provider value={{color: '#000'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <img src={logo} onClick={toggleHome} className="logo" alt="Logo" />
                        <MobileIcon onClick={props.toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            {['about', 'skills', 'projects'].map((item) => (
                                <NavItem key={item}>
                                    <NavLinks 
                                        to={item} 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact='true' 
                                        offset={-80}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </NavLinks>
                                </NavItem>
                            ))}
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