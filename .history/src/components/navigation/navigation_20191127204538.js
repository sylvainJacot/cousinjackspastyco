import React from 'react';
import Styled from 'styled-components';
import LogoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg'



export class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <img src={LogoL}/>
                <p>Hello</p>
            </nav>
        )
    }
  }
  
  export default Navigation;