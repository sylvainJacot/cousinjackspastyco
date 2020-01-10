import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {BodyBox} from "./components/default/BodyBox";
import {HomePage} from './components/screens/HomePage';
import {MenuPage} from "./components/screens/MenuPage";
import {Route} from 'react-router-dom';

const AppContainer = styled.div`
height: 100vh;
background-color: grey;
`;

export class App extends React.Component {
  render() {
      return (
          <AppContainer>
            <BodyBox>
                <Route exact path="/" component={HomePage}/>
                <Route path="/menupage" component={MenuPage}/>
            </BodyBox>
          </AppContainer>
      )
  }
}

export default App;


