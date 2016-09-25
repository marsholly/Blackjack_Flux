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
    // this.state = {
    //
    // }
    this.getBeginningCards = this.getBeginningCards.bind(this);
  }

  getBeginningCards(){
    const cards = Cards.wholeDeck;
    let newCards = _.chunk(_.shuffle(cards), 2);
    let beginningCards = {
      dealerBeginningCards: newCards[0],
      playerBeginningCards: newCards[1]
    }

    this.props.startGame(beginningCards);

  }

  render() {

    return (
      <div>
        <FloatingActionButton style={style} onClick={this.getBeginningCards}>
          <span>Deal</span>
        </FloatingActionButton>
      </div>
    )
  }
};
