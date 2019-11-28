import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'
import LogoQ from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

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
                    <li><img src={small} srcSet={`${small} 300w, ${medium} 768w, ${large} 1280w`} /></li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;