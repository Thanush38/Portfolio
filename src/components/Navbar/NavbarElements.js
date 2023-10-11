import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#6D90A6' : 'transparent')}; /* navbar will be black if scrollNav is true, otherwise it will be transparent */
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky; /* navbar will stick to the top of the page */
    top: 0;
    z-index: 10; /* navbar will be on top of everything else */

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; /* navbar will take 0.8 seconds to transition */
    } 
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1; /* navbar will be on top of everything else */
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
    `

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start; /* logo will be on the left side of the navbar */
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center; /* center the logo vertically */
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    
`

export const MobileIcon = styled.div`
    display: none; /* hamburger menu will not be displayed on desktop */

    @media screen and (max-width: 768px) {
        display: block; /* hamburger menu will be displayed on mobile */
        position: absolute; /* hamburger menu will be positioned absolutely */
        top: 0; /* hamburger menu will be at the top of the page */
        right: 0; /* hamburger menu will be at the right of the page */
        transform: translate(-100%, 60%); /* hamburger menu will be off the page */
        font-size: 1.8rem; /* hamburger menu will be 1.8rem */
        cursor: pointer; /* hamburger menu will be a pointer */
        color: #fff; /* hamburger menu will be white */
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; /* center the nav menu vertically */
    list-style: none; /* remove the bullet points */
    text-align: center; /* center the nav menu horizontally */
    margin-right: -22px; /* move the nav menu to the left a bit */

    @media screen and (max-width: 768px) {
        display: none; /* nav menu will not be displayed on mobile */
    }
`

export const NavItem = styled.li`
    height: 80px; /* nav item will be 80px tall */   
`

export const NavLinks = styled(LinkS)`
    color: #fff; /* nav links will be white */  
    display: flex;
    align-items: center; /* center the nav links vertically */
    text-decoration: none; /* remove the underline */
    padding: 0 1rem; /* nav links will have 0 padding on the left and right */
    height: 100%; /* nav links will be 100% tall */
    cursor: pointer; /* nav links will be a pointer */

    &.active {
        border-bottom: 3px solid #C0D7FB; /* nav link will have a red border on the bottom */
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center; /* center the nav btn vertically */

    @media screen and (max-width: 768px) {
        display: none; /* nav btn will not be displayed on mobile */
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px; /* nav btn will have a border radius of 50px */
    background: #8AC9EB; /* nav btn will have a green background */
    white-space: nowrap; /* nav btn will not wrap */
    padding: 10px 22px; /* nav btn will have 10px padding on the top and bottom and 22px padding on the left and right */
    color: #010606; /* nav btn will be black */
    font-size: 16px; /* nav btn will be 16px */
    outline: none; /* nav btn will not have an outline */
    border: none; /* nav btn will not have a border */
    cursor: pointer; /* nav btn will be a pointer */
    transition: all 0.2s ease-in-out; /* nav btn will take 0.2 seconds to transition */

    &:hover {
        transition: all 0.2s ease-in-out; /* nav btn will take 0.2 seconds to transition */
        background: #fff; /* nav btn will have a white background */
        color: #010606; /* nav btn will be black */
    }
`
