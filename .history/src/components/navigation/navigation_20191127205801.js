import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import LogoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.p`
    ul {
        display: flex;
    }
`;

export class Navigation extends React.Component {
    render() {
        return (
            <NavWrapper>
                
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li><img src={LogoS} srcSet={`${LogoS} 320w, ${LogoL} 1280w`} /></li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;