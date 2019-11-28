import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'

const P = styled.p`
font-family: 'Arvo', serif;
`;

export class Navigation extends React.Component {
    render() {
        return (
            <NavWrapper>
                
                <NavLinks>
                    <LinkItem>Item</LinkItem>
                    <LinkItem>Item</LinkItem>
                    <LinkItem>Item</LinkItem>
                </NavLinks>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;