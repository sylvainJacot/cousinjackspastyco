import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {ResponsiveImage} from '../default/ResponsiveImage';
// import {media} from '../default/mediaqueries';
// import burgerMenu from '../../assets/svg/Burger_Menu.svg'

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

const listItems = [
    {
        id:0,
        lable:"Item01",
        href:"href01",

    },
    {
        id:1,
        lable:"Item012",
        href:"href012",

    },
    {
        id:2,
        lable:"Item012",
        href:"href01",
        image: true
    },
    {
        id:3,
        lable:"Item013",
        href:"href01",

    },
    {
        id:4,
        lable:"Item014",
        href:"href01",

    },
] 

export class Navigation extends React.Component {

    render() {  
        return (
            <NavWrapper>
                
                <ul>
                    {listItems.map(listItem => (
                         <li key={listItem.id}>
                             <a href={listItem.href}>

                                 {listItem.image ?
                                   <ResponsiveImage
                                   source
                                   /> 
                                :
                                <>{listItem.lable}</>
                                 }
                                 </a>
                        </li>
                        ))}
                    
                </ul>
    
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