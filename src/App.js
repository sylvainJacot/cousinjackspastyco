import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {BrowserRouter as Router} from "react-router-dom";
import {media} from './components/default/mediaqueries';
import {HomePage} from './components/screens/HomePage';

const APP = styled.div`
height: 100vh;
background-color: grey;
`

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

export class App extends React.Component {
  render() {
      return (
        <Router>
          <APP>
            <BodyWrapper>
            <HomePage/>
            </BodyWrapper>
          </APP>
          </Router>
      )
  }
}

export default App;
