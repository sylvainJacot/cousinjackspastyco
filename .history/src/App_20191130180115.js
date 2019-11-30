import React from 'react';
import './reset.css';
import styled from 'styled-components';

import {Navigation} from './components/navigation/navigation';

export class App extends React.Component {
  render() {
      return (
          <Navigation />
      )
  }
}

export default App;
