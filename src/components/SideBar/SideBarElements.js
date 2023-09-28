import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";   
import { Link as LinkR } from "react-router-dom";
export const SidebarContainer = styled.aside`
    position: fixed; /* sidebar will be fixed */
    z-index: 999; /* sidebar will be on top of everything else */
    width: 100%; /* sidebar will be 350px */
    height: 100%; /* sidebar will be 100% of the page */
    background: #0d0d0d; /* sidebar will be yellow */
    display: grid; /* sidebar will be a grid */
    align-items: center; /* sidebar will be centered vertically */
    top: 0; /* sidebar will be at the top of the page */
    left: 0; /* sidebar will be at the left of the page */
    transition: 0.3s ease-in-out; /* sidebar will take 0.3 seconds to transition */
    opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; 
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; 
`

export const CloseIcon = styled(FaTimes)`
    color: #fff; /* close icon will be white */
`

export const Icon = styled.div`
    position: absolute; /* close icon will be positioned absolutely */
    top: 1.2rem; /* close icon will be at the top of the page */
    right: 1.5rem; /* close icon will be at the right of the page */
    background: transparent; /* close icon will be transparent */
    font-size: 2rem; /* close icon will be 2rem */
    cursor: pointer; /* close icon will be a pointer */
    outline: none; /* close icon will have no outline */
`

export const SidebarWrapper = styled.div`
    color: #fff; /* sidebar will be white */
`

export const SidebarMenu = styled.ul`
    display: grid; /* sidebar menu will be a grid */
    grid-template-columns: 1fr; /* sidebar menu will have 1 column */
    grid-template-rows: repeat(6, 80px); /* sidebar menu will have 6 rows */
    text-align: center; /* sidebar menu will be centered horizontally */

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px); /* sidebar menu will have 6 rows */
    }
`

export const SidebarLink = styled(LinkS)`   
    display: flex; /* sidebar link will be a flexbox */
    align-items: center; /* sidebar link will be centered vertically */ 
    justify-content: center; /* sidebar link will be centered horizontally */
    font-size: 1.5rem; /* sidebar link will be 1.5rem */
    text-decoration: none; /* sidebar link will have no text decoration */
    list-style: none; /* sidebar link will have no list style */
    transition: 0.2s ease-in-out; /* sidebar link will take 0.2 seconds to transition */
    text-decoration: none; /* sidebar link will have no text decoration */
    color: #fff; /* sidebar link will be white */
    cursor: pointer; /* sidebar link will be a pointer */

    &:hover {
        color: #01bf71; /* sidebar link will be green */
        transition: 0.2s ease-in-out; /* sidebar link will take 0.2 seconds to transition */
    }
`

export const SideBtnWrap = styled.div`  
    display: flex; /* sidebar button will be a flexbox */
    justify-content: center; /* sidebar button will be centered horizontally */
`

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px; /* sidebar button will have a border radius of 50px */
    background: #01bf71; /* sidebar button will have a green background */
    white-space: nowrap; /* sidebar button will not wrap */
    padding: 16px 64px; /* sidebar button will have 16px padding on the top and bottom and 64px padding on the left and right */
    color: #010606; /* sidebar button will be black */
    font-size: 16px; /* sidebar button will be 16px */
    outline: none; /* sidebar button will have no outline */
    border: none; /* sidebar button will have no border */
    cursor: pointer; /* sidebar button will be a pointer */
    transition: all 0.2s ease-in-out; /* sidebar button will take 0.2 seconds to transition */

    &:hover {
        transition: all 0.2s ease-in-out; /* sidebar button will take 0.2 seconds to transition */
        background: #fff; /* sidebar button will have a white background */
        color: #010606; /* sidebar button will be black */
    }
`

