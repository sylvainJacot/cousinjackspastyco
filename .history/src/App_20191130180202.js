import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {Navigation} from './components/navigation/navigation';

const App = styled.div`
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
