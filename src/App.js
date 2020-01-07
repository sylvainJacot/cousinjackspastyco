import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";
import {BodyBox} from "./components/default/BodyBox";
import {HomePage} from './components/screens/HomePage';

const APP = styled.div`
height: 100vh;
background-color: grey;
`;

export class App extends React.Component {
  render() {
      return (
        <Router>
          <APP>
            <BodyBox>
            <HomePage/>
            </BodyBox>
          </APP>
          </Router>
      )
  }
}

export default App;


