
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {colorsStyle} from '../default/colors';

const NavMobileListItemWrapper = styled.div`
display: inline-block;
li {
    display: inline-block;
    margin-bottom: 8px;
    a {
        font-family: Arvo-Bold, sans-serif;
font-size: 24px;
color: ${colorsStyle.secondary};
text-align: center;
line-height: 36px;
text-decoration: none;
margin: 0 32px;
    }
}
`
const UnderLine = styled.div`
background-color: ${colorsStyle.primary};
height: 1px;
`

export class NavMobileListItem extends React.Component {
    render() {
    const {key,path,label,image} = this.props;
        return (
            <NavMobileListItemWrapper>
                <li key={key}>
                    <Link to={path}>
                        {image ?
                        null 
                        :
                        <>{label}</>
                        }
                    </Link>
                    <UnderLine></UnderLine>
                </li>
            </NavMobileListItemWrapper>
        )
    }
}