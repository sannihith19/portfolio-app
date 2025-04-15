import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
display: flex;
color:#e1e9fc;
align-items: center;
padding: 10px;
height:60px;
text-decoration:none;
font-size: 20px;

&: hover{
    background: #252831;
    border-left: 4px solid #632ce4;
}

`
const SidebarLabel = styled.span`
margin-left: 16px;`


const SubMenu = ({ item, key }) => {
    return (
        <>
            <SidebarLink to={item.path}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
        </>
    );
};


export default SubMenu;
