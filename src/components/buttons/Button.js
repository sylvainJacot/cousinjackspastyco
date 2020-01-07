import React from 'react';
import styled from "styled-components";
import {colorsStyle} from "../default/colors";
import {Animations} from "../default/animations";
import {Router as Route} from "react-router-dom";

const ButtonWrapper = styled.button`
    position: relative;
    background: ${colorsStyle.primary};
    padding: 16px 40px;
    font-family: Arvo-Bold, sans-serif;
    color: ${colorsStyle.secondary};
    size: 16px;
    
    &:hover {
    color: ${colorsStyle.white};
    }
    
    &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: -2px;
    left: 0;
    background: ${colorsStyle.white};
    height: 2px;
    transition: ${Animations.default};
    }
    
    &:hover::before {
    bottom: -6px;
    transition: ${Animations.default};
    }
`;

export class Button extends React.Component {
    render() {
        const {pathName} = this.props;
        return (
            <ButtonWrapper>{this.props.children}</ButtonWrapper>
        )
    }
}
