import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {Navigation} from './components/navigation/navigation';

const APP = styled.div`
height: 100vh;
background-color: grey;
`

export class App extends React.Component {
  render() {
      return (
          <APP>
            <Navigation />
          </APP>
      )
  }
}

export default App;
