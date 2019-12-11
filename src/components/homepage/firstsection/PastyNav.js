import React from 'react';
import styled from "styled-components";
import {colorsStyle} from "../../default/colors";
import {img} from '../../default/img';
import {svgicons} from '../../default/icons';
import {absoluteCenter} from '../../default/alignements';
import {Animations} from '../../default/animations';

const ChooseTxt = styled.p`
font-family: Arvo-Bold, sans-serif;
color: ${colorsStyle.white};
font-size: 24px;
margin-left: 48px;
line-height: 24px;
`;
const ArrowHandDrawn = styled.img`
position: absolute;
left: 0;
top: 24px;
width: 104px;
`;
const Pasty = styled.img`
width: 360px;
height: 148px;
z-index: 1;
${absoluteCenter};
`;
const Circle = styled.div`
display: block;
width: 200px;
height: 200px;
border-radius: 50%;
background: ${colorsStyle.white};

`;
const PastyWrapper = styled.div`
display: block;
position: relative;
width: fit-content;
margin-left: 124px;
margin-top: 40px;
    &::after {
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
      &:hover ${Pasty} {
      transform: translate(50%,-50%) rotate(-4deg);
      transition: ${Animations.default};
      }
`;
const PastyNavWrapper = styled.a`
display: block;
position: relative;
cursor: pointer;
`;


export class PastyNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hoverActivation: false,
        };
    }
    toggleHover = () => {
        this.setState(
            {hoverActivation: !this.state.hoverActivation});
        console.log("hover fonctionnel");
    };
    render() {
        return (
            <PastyNavWrapper
                //onMouseOver={this.toggleHover}
            >
                <ChooseTxt>Choose your pasty</ChooseTxt>
                <ArrowHandDrawn src={svgicons.arrowHandDrawn}/>
                <PastyWrapper
                    //hoverActive={this.state.hoverActivation}
                >
                    <Pasty src={img.pasty}/>
                    <Circle></Circle>
                </PastyWrapper>
            </PastyNavWrapper>

        )
    }
}