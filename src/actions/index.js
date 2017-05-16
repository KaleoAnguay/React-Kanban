export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = cards => {
  console.log('cards',cards)
  return {
    type: LOAD_CARDS,
    cards
  };
};

export const addCard = card => {
  console.log('card', card)
  return {
    type: ADD_CARD,
    card
  };
};