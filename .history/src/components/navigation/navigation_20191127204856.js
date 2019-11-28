import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'

const NavWrapper = styled.p`
font-family: 'Arvo', serif;
`;

export class Navigation extends React.Component {
    render() {
        return (
            <NavWrapper>
                
                <ul>
                    <li>Item</li>
                    <LinkItem>Item</LinkItem>
                    <LinkItem><img src={LogoL}/></LinkItem>
                    <LinkItem>Item</LinkItem>
                    <LinkItem>Item</LinkItem>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;