
import React from 'react';
import styled from 'styled-components';
import {colorsStyle} from '../default/colors';
import {NavMobileListItem} from '../navigation/NavMobileListItem';
import {listItems} from '../../constant/navigation-mock';

const NavMobileListWrapper = styled.div`
position: absolute;
background-color: ${colorsStyle.white};
width: 100vw;
height: 400px;
transform: translateX(-24px);
text-align:center;
ul {
    display: flex;
    flex-direction: column;
}
`

export class NavMobileList extends React.Component {
    render() {
        return (
            <NavMobileListWrapper>
                <ul>
                {listItems.map(listItem =>(
                    <NavMobileListItem 
                    key={listItem.id}
                    path={listItem.pathLink}
                    label={listItem.label}
                    />
                    ))}
                </ul>
                </NavMobileListWrapper>
        )
    }
}