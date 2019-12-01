import React from 'react';
import styled from 'styled-components';

const BlueSquare = styled.div`
width: 400px;
height: 300px;
background-color: blue;

`;

export class NavMobile extends React.Component {

    render() {
        return (
            <BlueSquare>NavMobile</BlueSquare>
        )
    }
}
