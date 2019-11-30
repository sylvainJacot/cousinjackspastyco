import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {media} from './components/default/'
import {NavigationDesktop} from './components/navigation/NavigationDesktop';

const APP = styled.div`
padding: 0 24px;
height: 100vh;
background-color: grey;
`

export class App extends React.Component {
  render() {
      return (
          <APP>
            <NavigationDesktop />
          </APP>
      )
  }
}

export default App;
