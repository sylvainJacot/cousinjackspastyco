import React from 'react';
import styled from 'styled-components';

const BlueSquare = styled.div`
width: 800px;
height: 600px;
background-color: red;

`;

export class NavDesktop extends React.Component {

    render() {
        return (
            <BlueSquare>NavDesktop</BlueSquare>
        )
    }
}
