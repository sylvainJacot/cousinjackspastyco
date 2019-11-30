import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import {ResponsiveImage} from '../default/ResponsiveImage';


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

export class NavItemDesktop extends React.Component {
    render() {
        return (
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
        )
    }
}
