import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'

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
                    <li><img src={LogoL}/></li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;