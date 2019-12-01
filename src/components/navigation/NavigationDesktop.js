import React from 'react';
import styled from 'styled-components';
import {NavItemDesktop } from './NavItemDesktop';
import {listItems} from '../../constant/navigation-mock';

const NavWrapper = styled.div`
text-align: center;
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
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
                         <NavItemDesktop 
                         key={listItem.id}
                         margesLi={listItem.margesLi}
                         pathLink={listItem.pathLink}
                         label={listItem.label}
                         image={listItem.image}
                         exact={listItem.exact}
                         />
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;