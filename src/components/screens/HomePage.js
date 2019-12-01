import React from 'react';
import PropTypes from 'prop-types';
import {Switch,Route} from "react-router-dom";
import {sizes} from '../default/mediaqueries';
import {NavigationDesktop} from '../navigation/NavigationDesktop';
import { NavigationMobile } from '../navigation/NavigationMobile';
import { MenuPage } from './MenuPage';
import { StoreLocations } from './StoreLocations';
import { NavDesktop } from '../navigation/TestNavDesktop';
import { NavMobile } from '../navigation/TestNavMobile';



export class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            isDesktopL: false,
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
        this.setState({ isDesktopL: window.innerWidth >= sizes.desktopL });
      }

    render() {
        const isDesktop = this.state.isDesktopL;
        return (
            <>
            <NavigationDesktop/>
            <NavigationMobile/>
            <Switch>
                <Route path="/MenuPage"><MenuPage/></Route> 
                <Route path="/StoreLocations"><StoreLocations/></Route>
            </Switch>
            {isDesktop ? <NavDesktop/> :  <NavMobile/>} 
            </>
        )
    }
}
