import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import {media} from '../../default/mediaqueries';
import {colorsStyle} from "../../default/colors";
import {img} from '../../default/img';
import {PastyNav} from './PastyNav';

const FirstSectionWrapper = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;

      &:after {
      content: "";
      position: absolute;
      left:0;
      right:0;
      top:0;
      height: 88vh;
      background: ${colorsStyle.secondary};
      opacity: 80%;
      }
      &:before {
      content: "";
      position: absolute;
      left:0;
      right:0;
      top:0;
      height: 88vh;
      background:url("${img.cousinJackStore}") no-repeat center ;
      background-size: cover;
      }
    ${media.desktop`
        display:grid;
        grid-template-columns: repeat(10, 1fr);
        grid-column-gap: 16px;
        grid-auto-flow: row;
        align-items: center; 
    `}
`;

const FreshlyPrepared = styled.img`
    position: relative;
    z-index: 2;
    width: 80%;
    margin: 32px 0 40px 0;
    ${media.tablet`
     width: 56%;
    `}
    ${media.desktop`
        margin-top: 80px;
        width: 100%;
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