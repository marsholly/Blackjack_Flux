import React, { Component } from 'react';

export default class Dealer extends Component {

  render() {
    let { playerScore, playerCardsImg } = this.props;
    return (
      <span>
        <h3>Player :  {playerScore}</h3>
        <div className="row">
          <span className='cardsArea'> { playerCardsImg } </span>
        </div>
      </span>
    )
  }
};
