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
margin: auto;
    ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
`;


const Li = styled.li`
            margin: ${props => props.margesLi ? "0 12px" : "0 20px"};
            a {
                font-family: 'Arvo', serif;
                font-weight: bold;
                color: ${colorsStyle.white};
                font-size: 16px;
                text-decoration: none;
                img {
                    width: 400px;
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
        image: true,
        margesLi: true
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
                //List.js
                    {listItems.map(listItem => (
                        //NavItem.js
                         <Li key={listItem.id} margesLi={listItem.margesLi}>
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
                        </Li>
                        ))}
                    
                </ul>
    
            </NavWrapper>
        )
    }
  }
  
  export default NavigationDesktop;