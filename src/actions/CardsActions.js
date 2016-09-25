import AppDispatcher from '../AppDispatcher';

const CardsActions = {
  createNewGame(cards) {
    AppDispatcher.dispatch ({
      type: 'CREATE_NEW_GAME',
      payload: { cards }
    })
  },

}

export default CardsActions;
