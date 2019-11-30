import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {media} from './components/default/mediaqueries'
import {NavigationDesktop} from './components/navigation/NavigationDesktop';

const 

const BodyWrapper = styled.div`
${media.desktopL`
width: 1232px;
margin: auto;
`}
`

export class App extends React.Component {
  render() {
      return (
          <APP>
            <BodyWrapper>
            <NavigationDesktop />
            </BodyWrapper>
          </APP>
      )
  }
}

export default App;
