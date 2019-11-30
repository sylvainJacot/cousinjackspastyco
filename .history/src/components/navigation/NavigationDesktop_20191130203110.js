import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
// import {media} from '../default/mediaqueries';
// import burgerMenu from '../../assets/svg/Burger_Menu.svg'
import {NavItemDesktop } from './NavItemDesktop';

import { sizes } from '../default/mediaqueries';

const NavWrapper = styled.div`
margin: auto;
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;




export class NavigationDesktop extends React.Component {

    render() {  
        return (
            <NavWrapper>
                {/* Navbar.js */}
                <ul>
                {/* NavList.js */}
                    {listItems.map(listItem => (
                        //NavItem.js
                         <NavItemDesktop />
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;