import React from 'react';
import PropTypes from 'prop-types';
import {Switch,Route} from "react-router-dom";
import {NavigationDesktop} from '../navigation/NavigationDesktop';
import { NavigationMobile } from '../navigation/NavigationMobile';
import { MenuPage } from './MenuPage';
import { StoreLocations } from './StoreLocations';



export class HomePage extends React.Component {
    render() {
        return (
            <>
            <NavigationDesktop/>
            <NavigationMobile/>
            <Switch>
                <Route path="/MenuPage"><MenuPage/></Route> 
                <Route path="/StoreLocations"><StoreLocations/></Route>
            </Switch>
            </>
        )
    }
}
