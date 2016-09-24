import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui';
import GameDeck from './GameDeck';
import OperatingArea from './OperatingArea';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <h1 className="text-center">Blackjack</h1>
          <div className="row">
            <div className="col-md-10">
              <GameDeck />
            </div>
            <div className="col-md-2">
              <OperatingArea />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};
