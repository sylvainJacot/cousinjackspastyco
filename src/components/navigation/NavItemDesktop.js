import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logoL from '../../assets/svg/CousinJacks_Logo_Horizontal.svg';
import logoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import {ResponsiveImage} from '../default/ResponsiveImage';
import {colorsStyle} from '../default/colors';
import { sizes } from '../default/mediaqueries';


const Li = styled.li`
            margin: ${props => props.margesLi ? "0 4px" : "0 20px"};
            a {
                font-family: 'Arvo', serif;
                font-weight: bold;
                color: ${colorsStyle.white};
                font-size: 16px;
                text-decoration: none;
                img {
                    width: 400px;
                }
            &:hover {
                color: ${colorsStyle.primary}
            }
            }

`;

export class NavItemDesktop extends React.Component {
    static propTypes = {
        key: PropTypes.string,
        margesLi: PropTypes.string,
        href: PropTypes.string,
    }
    render() {
        const {key, margesLi, pathLink, image, label,exact} = this.props;
        return (
            <Li key={key} margesLi={margesLi}>
                             <Link to={pathLink} exact={exact}>

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
                                 </Link>
                        </Li>
        )
    }
}
