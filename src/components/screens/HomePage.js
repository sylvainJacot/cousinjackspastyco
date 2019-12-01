import React from 'react';
import {Switch,Route} from "react-router-dom";
import {sizes} from '../default/mediaqueries';
import {NavigationDesktop} from '../navigation/NavigationDesktop';
import { NavigationMobile } from '../navigation/NavigationMobile';
import { MenuPage } from './MenuPage';
import { StoreLocations } from './StoreLocations';




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
            {isDesktop ? <NavigationDesktop/> :  <NavigationMobile/>} 
            <Switch>
                <Route path="/MenuPage"><MenuPage/></Route> 
                <Route path="/StoreLocations"><StoreLocations/></Route>
            </Switch>
            
            </>
        )
    }
}
