import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {PastyNav} from './PastyNav';
import {img} from '../../default/img';

const FirstSectionWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-items: center;
`;

const FreshlyPrepared = styled.img`
    margin-top: 40px;
    width: 100%;
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