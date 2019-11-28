import React from 'react';
import styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'

const P = styled.p`
font-family: 'Arvo', serif;
`;

export class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <img src={LogoL}/>
                <P>Hello</P>
            </nav>
        )
    }
  }
  
  export default Navigation;