import React from 'react';
import styled from 'styled-components';
// import burgerMenu from '../../assets/svg/Burger_Menu.svg'
import {NavItemDesktop } from './NavItemDesktop';

const NavWrapper = styled.div`
margin: auto;
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;


const listItems = [
    {
        id:0,
        label:"Item01",
        href:"href01",
    },
    {
        id:1,
        label:"Item012",
        href:"href012",

    },
    {
        id:1,
        label:"Item012",
        href:"href012",

    },
    {
        id:2,
        label:"Item012",
        href:"href01",
        image: true,
        margesLi: true
    },
    {
        id:3,
        label:"Item013",
        href:"href01",

    },
    {
        id:4,
        label:"Item014",
        href:"href01",

    },
    {
        id:1,
        label:"Item012",
        href:"href012",

    },
] 

export class NavigationDesktop extends React.Component {

    render() {  
        return (
            <NavWrapper>
                {/* Navbar.js */}
                <ul>
                {/* NavList.js */}
                    {listItems.map(listItem => (
                        //NavItem.js
                         <NavItemDesktop 
                         key={listItem.id}
                         margesLi={listItem.margesLi}
                         href={listItem.href}
                         label={listItem.label}
                         image={listItem.image}
                         />
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;