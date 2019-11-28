import React from 'react';
import styled from 'styled-components';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.p`
    ul {
        display: flex;
    }
`;

const image1 = ${logoS};
const image2 = ${logoL};

export class Navigation extends React.Component {
    state = { currentSrc: '' };
    onLoad = (event) => {
        this.setState({
          currentSrc: event.target.currentSrc
        });
      }
    render() {
        return (
            <NavWrapper>
                
                <ul>
                    <li>Item</li>
                    <li>Item</li>
                    <li><img 
                    src={logoS}
                    srcSet={`${image1} 300w, ${image2} 1440w`}
                    onLoad={this.onLoad}
                    /></li>
                    <li>Item</li>
                    <li>Item</li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;