import * as React from 'react';

import { Game } from './boardgame/game.component';

import Button from '@material-ui/core/Button';
import Layout from './layout/layout';
import { BrowserRouter } from 'react-router-dom';
export interface AppProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <Layout></Layout>
      // <div>
      //   <h1>
      //     Hello from {this.props.compiler} and {this.props.framework}!
      //   </h1>
      //   <div>
      //     {/* <Game /> */}
      //     <Layout></Layout>
      //   </div>
      // </div>
    );
  }
}
