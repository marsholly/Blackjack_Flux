import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Cards from '../Cards';
import _ from 'lodash';

const style = {
  marginRight: 20,
};

export default class OperatingArea extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.startGame = this.startGame.bind(this);
  }

  startGame(){
    const cards = Cards.wholeDeck;
    console.log('cards:', cards);
  }

  render() {

    return (
      <div>
        <FloatingActionButton style={style} onClick={this.startGame}>
          <span>Deal</span>
        </FloatingActionButton>
      </div>
    )
  }
};
