import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CardsActions from '../actions/CardsActions';
import Cards from '../Cards';
import _ from 'lodash';

const style = {
  marginRight: 20,
  marginBottom: 30,
};

export default class OperatingArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCards: [],
      beginningCards: {},
      index: 4
    }

    this.getBeginningCards = this.getBeginningCards.bind(this);
    this.hitCards = this.hitCards.bind(this);
    this.standCards = this.standCards.bind(this);
  }

  getBeginningCards() {
    const cards = Cards.wholeDeck;
    let newCards = _.shuffle(cards);
    let beginningCards = {
      dealerCards: [ newCards[0], newCards[1] ],
      playerCards: [ newCards[2], newCards[3] ]
    }

    this.props.startGame(beginningCards);
    this.setState({ newCards, beginningCards })
  }

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

  hitCards() {
    let { beginningCards, newCards, index } = this.state;
    let dealerCardsArr, playerCardsArr, dealerScore, playerScore;
    dealerCardsArr = beginningCards.dealerCards;
    playerCardsArr = beginningCards.playerCards;
    dealerScore = this.scoreHand(dealerCardsArr);
    playerScore = this.scoreHand(playerCardsArr);

    let i = index;
    playerCardsArr.push(newCards[i]);
    i++;
    this.setState({index: i});

    let lastCards = {
      dealerCards: dealerCardsArr,
      playerCards: playerCardsArr
    };

    CardsActions.hit(lastCards);

  }

  standCards() {
    let { beginningCards, newCards, index } = this.state;
    let dealerCardsArr, playerCardsArr, dealerScore, playerScore;
    dealerCardsArr = beginningCards.dealerCards;
    playerCardsArr = beginningCards.playerCards;
    dealerScore = this.scoreHand(dealerCardsArr);
    playerScore = this.scoreHand(playerCardsArr);

    let i = index;
    while ((playerScore <= 21) && (dealerScore < 21) && (dealerScore < playerScore)) {
      dealerCardsArr.push(newCards[i]);
      dealerScore = this.scoreHand(dealerCardsArr);
      i++;
    }

    this.setState({index: i});

    let lastCards = {
      dealerCards: dealerCardsArr,
      playerCards: playerCardsArr
    }

    CardsActions.stand(lastCards);
  }

  render() {

    return (
      <div className = 'btnGroup'>
        <FloatingActionButton style={style} onClick={this.getBeginningCards}>
          <span>Deal</span>
        </FloatingActionButton>
        <FloatingActionButton style={style} onClick={this.hitCards}>
          <span>Hit</span>
        </FloatingActionButton>
        <FloatingActionButton secondary={true} style={style} onClick={this.standCards}>
          <span>Stand</span>
        </FloatingActionButton>
      </div>
    )
  }
};
