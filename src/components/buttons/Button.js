import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";

const ButtonBox = styled.button`
    background: red;
    color: white;
    padding: 8px;
`;

export class Button extends React.Component {
    render() {
        return (
           <ButtonBox>{this.props.children}</ButtonBox>
        )
    }
}
