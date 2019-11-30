import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {NavigationDesktop} from './components/navigation/navigation';

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
