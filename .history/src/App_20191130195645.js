import React from 'react';
import './reset.css';
import styled from 'styled-components';
import {media} from './components/default/mediaqueries'
import {NavigationDesktop} from './components/navigation/NavigationDesktop';

const BodyWrapper = styled.div`
height: 100vh;
background-color: grey;
${media.desktopL`
width: 1232px;
margin: auto;
`}
`

export class App extends React.Component {
  render() {
      return (
          <app>
            <BodyWrapper>
            <NavigationDesktop />
            </BodyWrapper>
          </app>
      )
  }
}

export default App;
