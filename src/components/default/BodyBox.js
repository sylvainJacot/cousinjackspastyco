import React from 'react';
import styled from "styled-components";
import {Switch,Route} from "react-router-dom";
import {media, sizes} from "./mediaqueries";
import { MenuPage } from '../screens/MenuPage';
import { StoreLocations } from '../screens/StoreLocations';
import {NavigationDesktop} from '../navigation/NavigationDesktop';
import { NavigationMobile } from '../navigation/NavigationMobile';
import Footer from "../footer/Footer";

const BodyWrapper = styled.div`
position: relative;
padding: 0 24px;
margin: auto;

${media.desktop`
padding: 0 80px;
`}

${media.desktopL`
margin: auto;
`}
`;

export class BodyBox extends React.Component {
    constructor() {
        super();
        this.state = {
            isDesktop: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth >= sizes.desktop });
    }
    render() {
        const isDesktop = this.state.isDesktop;
        return (
            <BodyWrapper>
                {isDesktop ? <NavigationDesktop/> :  <NavigationMobile/>}
                <Switch>
                    <Route path="/MenuPage"><MenuPage/></Route>
                    <Route path="/StoreLocations"><StoreLocations/></Route>
                </Switch>
                {this.props.children}
                <Footer/>
            </BodyWrapper>
        )
    }
}

export default BodyBox;