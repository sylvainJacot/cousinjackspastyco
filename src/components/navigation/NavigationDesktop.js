import React from 'react';
import styled from 'styled-components';
import {NavItemDesktop } from './NavItemDesktop';
import {listItems} from '../../constant/navigation-mock';
import {media} from '../default/mediaqueries';

const NavWrapper = styled.div`
text-align: center;
margin-bottom: 40px;
position: relative;
z-index: 1;
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
${media.desktopL`
  padding-top: 32px
`} 
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