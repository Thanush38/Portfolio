import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,SideBtnWrap, SidebarRoute } from './SideBarElements'
const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/Contact" onClick={toggle}>Contact</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar
