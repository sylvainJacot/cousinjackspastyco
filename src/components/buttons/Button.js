import React from 'react';
import styled from "styled-components";
import {colorsStyle} from "../default/colors";
import {Animations} from "../default/animations";
import {Link} from 'react-router-dom';

const ButtonWrapper = styled(Link)`
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
        const {PathName} = this.props;
        return (
            <ButtonWrapper to={PathName}>{this.props.children}</ButtonWrapper>
        )
    }
}
