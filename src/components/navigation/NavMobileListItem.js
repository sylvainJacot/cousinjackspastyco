
import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colorsStyle} from '../default/colors';

const NavMobileListItemWrapper = styled.div`
display: inline-block;
li {
    display: inline-block;
    margin-bottom: 16px;
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
`;
const UnderLine = styled.div`
background-color: ${colorsStyle.primary};
height: 1px;
`;

export class NavMobileListItem extends React.Component {
    render() {
    const {key,path,label,image,onClickLink} = this.props;
        return (
            <NavMobileListItemWrapper>{image ? null :
                <li key={key}>
                    <Link to={path} onClick={onClickLink}>
                        {label}
                    </Link>
                    <UnderLine />
                </li>}
            </NavMobileListItemWrapper>
        )
    }
}