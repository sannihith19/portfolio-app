import React, {useState} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    `;

const NavIcon = styled(Link)`
margin-left: 2rem;
font-size: 2rem;
height:80px;
display:flex;
justify-content: flex-start;
align-items:center;
color: #ffffff;
`
const SidebarNav = styled.nav`
background: #15171c;
width: 250px;
height:100vh;
display:flex;
justify-content: center;
position: fixed;
top: 0;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition:350ms;
z-index: 10;`

const SidebarWrap = styled.div`
width: 100%;`

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <Nav>
                <NavIcon >
                    <FaIcons.FaBars onClick={showSidebar}/>
                </NavIcon>
            </Nav>
            <SidebarNav sidebar = {sidebar}>
                <SidebarWrap>
                    <NavIcon >
                        <AiIcons.AiOutlineClose onClick={showSidebar}/>
                    </NavIcon>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index}/>;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar