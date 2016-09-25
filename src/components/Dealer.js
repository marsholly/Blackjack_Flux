import React, { Component } from 'react';

export default class Dealer extends Component {

  render() {
    let { dealerCardsImg, dealerScore } = this.props;
    return (
      <span>
        <h3>Dealer :  { dealerScore }</h3>
        <div className="row">
          <span className='cardsArea'> { dealerCardsImg } </span>
        </div>
      </span>
    )
  }
};
