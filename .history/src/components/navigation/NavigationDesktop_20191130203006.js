import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {ResponsiveImage} from '../default/ResponsiveImage';
// import {media} from '../default/mediaqueries';
// import burgerMenu from '../../assets/svg/Burger_Menu.svg'
import {NavItemDesktop } from './NavItemDesktop'

import { sizes } from '../default/mediaqueries';

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
                         
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;