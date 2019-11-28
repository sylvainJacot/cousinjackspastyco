import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {media} from '../default/mediaqueries';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.p`
    ul {
        display: flex;
        li {
            a {
                font-family: 'Arvo', serif;
                color: ${colorsStyle.secondary};
            }
        }
    }
`;


export class Navigation extends React.Component {
<<<<<<< HEAD
   
=======
    state = { currentSrc: '' };
    onLoad = (event) => {
        this.setState({
          currentSrc: event.target.currentSrc
        });
      }
>>>>>>> b6d21c594418571673a509fd1960f8b86b2dd979
    render() {
        return (
            <NavWrapper>
                
                <ul>
                    <li><a>Item</a></li>
                    <li><a>Item</a></li>
<<<<<<< HEAD
                    <li><a>
                            <img src={logoS}/>
                        </a>
                    </li>

                    <li><a>Item</a></li>
                    <li><a>Item</a></li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;