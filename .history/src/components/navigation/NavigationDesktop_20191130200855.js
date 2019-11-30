import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {ResponsiveImage} from '../default/ResponsiveImage';
// import {media} from '../default/mediaqueries';
// import burgerMenu from '../../assets/svg/Burger_Menu.svg'
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import { sizes } from '../default/mediaqueries';

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
                    width: 400px;
                    fill:red;
                }
            }
        }
    }
`;

const listItems = [
    {
        id:0,
        label:"Item01",
        href:"href01",
    },
    {
        id:1,
        label:"Item012",
        href:"href012",

    },
    {
        id:2,
        label:"Item012",
        href:"href01",
        image: true
    },
    {
        id:3,
        label:"Item013",
        href:"href01",

    },
    {
        id:4,
        label:"Item014",
        href:"href01",

    },
] 

export class NavigationDesktop extends React.Component {

    render() {  
        return (
            <NavWrapper>
                
                <ul>
                    {listItems.map(listItem => (
                         <li key={listItem.id}>
                             <a href={listItem.href}>

                                 {listItem.image ?
                                   <ResponsiveImage
                                        sourceMobile={logoS}
                                        altImage='hello'
                                        sourceDesktop={logoL}
                                        breakPoint={sizes.desktopL}
                                   /> 
                                :
                                <>{listItem.label}</>
                                 }
                                 </a>
                        </li>
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;