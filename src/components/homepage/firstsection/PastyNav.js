import React from 'react';
import styled from "styled-components";
import {colorsStyle} from "../../default/colors";
import {img} from '../../default/img';
import {svgicons} from '../../default/icons';
import {absoluteCenter} from '../../default/alignements';
import {Animations} from '../../default/animations';

const ChooseYourPasty = styled.p``;
const Pasty = styled.img``;
const PastyWrapper = styled.div``;
const PastyNavWrapper = styled.div`
`;
const PastyNavLink = styled.a`
display: block;
position: relative;
margin-top: 64px;

  ${ChooseYourPasty} {
    position: relative;
    font-family: Arvo-Bold, sans-serif;
    text-transform: uppercase;
    color: ${colorsStyle.white};
    font-size: 16px;
    margin-left: 48px;
    margin-bottom: 48px;
    line-height: 24px;
    
    &:after {
    content: "";
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    left: -51px;
    top: 12px;
    background: url("${svgicons.arrowHandDrawn}") no-repeat;
    background-size: contain;
    z-index: 2;
    transform: rotate(16deg);
    }
  }
  ${PastyWrapper} {
  position: relative;
  width: fit-content;
  
    &:before {
    content:"";
    display: block;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    ${absoluteCenter};
    background: ${colorsStyle.white};
    }
    &:after {
     content: "";
     display: inline-block;
     width: 200px;
     height: 200px;
     position: absolute;
     top: 50%;
     right: 50%;
     transform: translate(50%,-50%) scale(1);
     border-radius: 50%;
     border: 0px solid ${colorsStyle.primary};
     transition: ${Animations.default};
    }
    &:hover:after {
        transform: translate(50%,-50%) scale(1.15);
        border: 1px solid ${colorsStyle.primary};
        transition: ${Animations.default};
      }
    &:hover:before {
        transform: translate(50%,-50%) scale(1.15);
        transition: ${Animations.default};
      }
   &:hover ${Pasty} {
      transform: rotate(-4deg);
      transition: ${Animations.default};
      }   
  
  ${Pasty} {
    position: inherit;
    z-index: 1;
    width: 100%;
    height: auto;
  }
  }
`;

export class PastyNav extends React.Component {
    render() {
        return (
            <PastyNavWrapper>
                <PastyNavLink>
                    <ChooseYourPasty>Choose your pasty</ChooseYourPasty>
                    <PastyWrapper>
                        <Pasty src={img.pasty}/>
                    </PastyWrapper>
                </PastyNavLink>
            </PastyNavWrapper>

        )
    }
}