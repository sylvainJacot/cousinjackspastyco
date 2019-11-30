import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import {ResponsiveImage} from '../default/ResponsiveImage';
import {colorsStyle} from '../default/colors';
import { sizes } from '../default/mediaqueries';


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
            &:hover
            }

`;

export class NavItemDesktop extends React.Component {
    static propTypes = {
        key: PropTypes.string,
        margesLi: PropTypes.string,
        href: PropTypes.string,
    }
    render() {
        const {key, margesLi, href, image, label} = this.props;
        return (
            <Li key={key} margesLi={margesLi}>
                             <a href={href}>

                                 {image ?
                                   <ResponsiveImage
                                        sourceMobile={logoS}
                                        altImage='hello'
                                        sourceDesktop={logoL}
                                        breakPoint={sizes.desktopL}
                                   /> 
                                :
                                <>{label}</>
                                 }
                                 </a>
                        </Li>
        )
    }
}
