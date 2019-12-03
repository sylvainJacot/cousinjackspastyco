import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {listItems} from '../../constant/navigation-mock';
import {NavMobileList} from '../navigation/NavMobileList';
import LogoS from '../../assets/svg/CousinJacks_Logo.Vertical.svg';
import MenuIcon from '../../assets/svg/Burger_Menu.svg';

const NavMobileWrapper = styled.div`
display: flex;
position: relative;
h1 {
    z-index: 1;

    a {
        display: block;
    #LogoS {
        width:96px;
    }
}
}
    #MenuIcon {
        position: absolute;
        width: 48px;
        right: 0;
        bottom: 50%;
        transform: translateY(50%);
    }
`

export class NavigationMobile extends React.Component {
    render() {
        return (
            <>
            <NavMobileWrapper>
                <h1>
                    <Link to={listItems[3].pathLink}>
                        <img src={LogoS} id="LogoS" />
                    </Link>
                </h1>
                <NavMobileList/>
                <img src={MenuIcon} id="MenuIcon"/>
            </NavMobileWrapper>
            </>
        )
    }
}
