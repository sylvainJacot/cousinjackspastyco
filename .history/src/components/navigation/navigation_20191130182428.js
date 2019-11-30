import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {media} from '../default/mediaqueries';
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
            }
        }
    }
`;

export class Navigation extends React.Component {
constructor() {
    super();
    this.state = [
        {
            id:0,ItemName:Item01}
    ]
}
    render() {  
        return (
            <NavWrapper>
                
                <ul>
                <li id="logo"><a>
                            <picture>
                                <source 
                                    srcSet={logoL}
                                    media="(min-width: 1440px)"
                                />
                                <img src={logoS}
                                    alt="Logo"
                                    srcSet={logoS}
                                />    
                            </picture>

                        </a>
                    </li>
                    <li><a>Item1</a></li>
                    <li><a>Item2</a></li>
                    <li><a>Item3</a></li>
                    <li><a>Item4</a></li>
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default Navigation;

//   <img src={`https://robohash.org/${props.user.id}?set=set6`} />