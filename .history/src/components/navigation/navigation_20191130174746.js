import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {media, sizes} from '../default/mediaqueries';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';

const NavWrapper = styled.p`
    ul {
        display: flex;
        li {
            a {
                font-family: 'Arvo', serif;
                color: ${colorsStyle.secondary};
                font-size: 40px;
            }
        }
    }
`;


export class Navigation extends React.Component {
    render() {
        const DesktopLInPx = sizes.desktopL + "px";
        return (
            <NavWrapper>
                
                <ul>
                    <li><a>Item</a></li>
                    <li><a>Item</a></li>
                    <li><a>
                            <picture>
                                <source 
                                    srcSet={logoL}
                                    media={`(mind-width: ${DesktopLInPx})`}
                                    // media="(min-width: 1440px)"
                                />
                                <img src={logoS}
                                    alt="Logo"
                                    srcSet={logoS}
                                />    
                            </picture>

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

//   <img src={`https://robohash.org/${props.user.id}?set=set6`} />