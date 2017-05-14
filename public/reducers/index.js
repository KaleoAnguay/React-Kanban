import { LOAD_CARDS, ADD_CARD } from '../actions';

const initalState = {
  books: []
};

const cards = ( state = initalState, action) => {
  console.log('state', state);
  console.log('action', action);
  switch(action.type) {
    case LOAD_CARDS:
      return Object.assign({}, state, {
        cards: action.cards
      });

    case ADD_CARD:
      return Object.assign({}, state, {
        cards : state.cards.concat(action.card)
      });

      default:
        return state;
  }
};

export default cards;