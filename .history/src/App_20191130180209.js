import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {Navigation} from './components/navigation/navigation';

const App = styled.div`
background-color: grey;
`

export class App extends React.Component {
  render() {
      return (
          <App>
            <Navigation />
          </App>
      )
  }
}

export default App;
