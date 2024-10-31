import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#5A84A4' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky; 
    top: 0;
    z-index: 10; 
    transition: 0.4s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease; 
    } 
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1; 
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #000;
    justify-self: flex-start; 
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center; 
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`

export const MobileIcon = styled.div`
    display: none; 

    @media screen and (max-width: 768px) {
        display: block; 
        position: absolute;
        top: 0; 
        right: 0; 
        transform: translate(-100%, 60%);
        font-size: 1.8rem; 
        cursor: pointer; 
        color: #000;
        transition: all 0.3s ease-in-out;

        &:hover {
            transform: translate(-100%, 60%) scale(1.1);
        }
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center; 
    list-style: none; 
    text-align: center; 
    margin-right: -22px; 

    @media screen and (max-width: 768px) {
        display: none; 
    }
`

export const NavItem = styled.li`
    height: 80px;   
`

export const NavLinks = styled(LinkS)`
    color: #000; 
    display: flex;
    align-items: center;
    text-decoration: none; 
    padding: 0 1rem; 
    height: 100%; 
    cursor: pointer; 
    transition: all 0.3s ease-in-out;

    &.active {
        border-bottom: 3px solid #8AC9EB;
        color: #8AC9EB;
    }

    &:hover {
        color: #8AC9EB;
        transform: translateY(-2px);
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center; 

    @media screen and (max-width: 768px) {
        display: none; 
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px; 
    background: #8AC9EB;
    white-space: nowrap; 
    padding: 10px 22px; 
    color: #010606; 
    font-size: 16px; 
    outline: none; 
    border: none; 
    cursor: pointer;
    transition: all 0.3s ease-in-out; 
    text-decoration: none;

    &:hover {
        background: #000;
        color: #fff; 
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`