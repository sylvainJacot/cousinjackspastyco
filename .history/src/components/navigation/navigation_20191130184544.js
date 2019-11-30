import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {media} from '../default/mediaqueries';
import burgerMenu from '../../assets/svg/Burger_Menu.svg'
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.div`

    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            a {
                font-family: 'Arvo', serif;
                color: ${colorsStyle.secondary};
                font-size: 40px;
                img {
                    width: 80px;
                }
            }
        }
    }
`;

export class Navigation extends React.Component {
constructor() {
    super();
    this.map
}
    render() {  
        return (
            <NavWrapper>
                
                <ul>
                    <li><a>Item4</a></li>
                </ul>

                <a><div class></div></a>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;

//  <li id="logo"><a>
//                             <picture>
//                                 <source 
//                                     srcSet={logoL}
//                                     media="(min-width: 1440px)"
//                                 />
//                                 <img src={logoS}
//                                     alt="Logo"
//                                     srcSet={logoS}
//                                 />    
//                             </picture>

//                         </a>
//                     </li>