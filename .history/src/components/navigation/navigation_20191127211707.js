import React from 'react';
import styled from 'styled-components';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.p`
    ul {
        display: flex;
    }
`;

export class Navigation extends React.Component {
    state = { currentSrc: '' };

    onLoad = (event) => {
      this.setState({
        currentSrc: event.target.currentSrc
      });
    }
    const 
    render() {
        return (
            <NavWrapper>
                
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li><img 
                    src={logoS}
                    srcset={`${logoS} 300w,${logoL} 1440w}`}
                    /></li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;