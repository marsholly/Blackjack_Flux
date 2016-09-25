import React, { Component } from 'react';

export default class GameDeck extends Component {

  scoreHand(cards){
    let aces = 0;
    let score = cards.reduce((sum, card) => {
      if ( card[0] === 1 ) {
        aces++;
        return sum + 11;
      } else {
        return sum + card[0];
      }
    }, 0);

    while ( score > 21 && aces ) {
      score -= 10;
      aces--;
    }
    return score;
  }

  displayCards(cards) {
    let CardsImg, cardName;
    return cards.map((card, index) => {
      cardName = card[1];
      return <span key={ index }><img src={`https://raw.githubusercontent.com/marsholly/Blackjack_Flux/master/CardImgs/${cardName}.png`} width="150" height="200"/>&nbsp;&nbsp;&nbsp;</span>;
    });
  }

  render() {
    let { cards } = this.props;
    let  dealerCardsArr, playerCardsArr, dealerCardsImg, playerCardsImg, dealerScore = 0, playerScore = 0;
    let scores = { dealerScore: 0, playerScore: 0 };

    if ( Object.keys(cards).length !== 0) {
      dealerCardsArr = cards.dealerCards;
      playerCardsArr = cards.playerCards;

      dealerCardsImg = this.displayCards(dealerCardsArr);
      playerCardsImg = this.displayCards(playerCardsArr);

      dealerScore = this.scoreHand(dealerCardsArr);
      playerScore = this.scoreHand(playerCardsArr);

    } else {
      dealerCardsImg = <div></div>;
      playerCardsImg = <div></div>;
    }

    return (
      <div>
        <h3>Dealer :  { dealerScore }</h3>
        <div className="row">
          <span className='cardsArea'> { dealerCardsImg } </span>
        </div>
        <h3>Player :  {playerScore}</h3>
        <div className="row">
          <span className='cardsArea'> { playerCardsImg } </span>
        </div>
      </div>
    )
  }
};
