import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {colorsStyle} from "../../default/colors";
import {img} from '../../default/img';
import {svgicons} from '../../default/icons'

const ArrowHandDrawn = styled.img`
width: 104px;
`;
const Pasty = styled.img`
width: 360px;
height: 148px;
`;
const Circle = styled.div`
display: block;
position: absolute;
width: 216px;
height: 216px;
border-radius: 50%;
background: ${colorsStyle.white} ;
top: 50%;
right: 50%;
transform: translate(50%,-50%);
`;
const PastyWrapper = styled.div`
display: inline-block;
position: relative;
`;

const PastyNavWrapper = styled.div`
display: block;
`;


export class PastyNav extends React.Component {
    render() {
        return (
            <PastyNavWrapper>
                PastyNav
                <ArrowHandDrawn src={svgicons.arrowHandDrawn}/>
                <PastyWrapper>
                    <Pasty src={img.pasty}/>
                    <Circle></Circle>
                </PastyWrapper>
            </PastyNavWrapper>

        )
    }
}