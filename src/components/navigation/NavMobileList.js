
import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {Animations} from '../default/animations';
import {NavMobileListItem} from '../navigation/NavMobileListItem';
import {listItems} from '../../constant/navigation-mock';

const NavMobileListWrapper = styled.div`
position: absolute;
background-color: ${props => props.active ? 'red' : colorsStyle.white};
width: 100vw;
height: 100vh;
transform: translateX(24px);
padding-top: ${props => props.logoHeight + 16}px;
text-align:center;
right: ${props => props.listMenuOpen ? '0px' : '-100vw'};
transition: ${Animations.default};;
z-index: 2;
ul {
    display: flex;
    flex-direction: column;
}
`

export class  NavMobileList extends React.Component {
    render() {
        const {menuActive, height} = this.props;
        return (
            <NavMobileListWrapper logoHeight={height} listMenuOpen={menuActive}>
                <ul>
                {listItems.map(listItem =>(
                    <NavMobileListItem 
                    key={listItem.id}
                    path={listItem.pathLink}
                    label={listItem.label}
                    image={listItem.image}
                    />
                    ))}
                </ul>
                </NavMobileListWrapper>
        )
    }
}