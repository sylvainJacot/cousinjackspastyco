import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {media} from '../../default/mediaqueries';
import {PastyNav} from './PastyNav';
import {img} from '../../default/img';

const FirstSectionWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-items: center;
    ${media.desktop`
        display:grid;
        grid-template-columns: repeat(10, 1fr);
        grid-column-gap: 16px;
        grid-auto-flow: row;
        align-items: center; 

    `}
`;

const FreshlyPrepared = styled.img`
    width: 100%;
    ${media.desktop`
        grid-column: 1 / 6;
    `}
`;


export class Firstsection extends React.Component {
    render() {
        return (
            <FirstSectionWrapper>
                <FreshlyPrepared src={img.freshlyPrepared}/>
                <PastyNav/>
            </FirstSectionWrapper>
        )
    }
}