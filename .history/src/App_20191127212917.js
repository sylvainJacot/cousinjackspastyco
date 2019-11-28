import React from 'react';
import './reset.css';
import {colorsStyle} from './'
import {media} from './components/default/mediaqueries';

import {Navigation} from './components/navigation/navigation';

export class App extends React.Component {
  render() {
      return (
          <Navigation />
      )
  }
}

export default App;
