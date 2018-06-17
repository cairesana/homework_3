// import { NEW_GAME } from '../actions/game';
// import { MAKE_GUESS } from '../actions/game';
// import { randomWord } from '../lib/game';


// export default(state = [], action = {}) => {
//   switch(action.type) {
//   case NEW_GAME:
//     return action.payload
//   case MAKE_GUESS:
//     return {
//       ...state,
//       letterGuess: state.letter.concat(action.letter)
//     }
//
//   default:
//     return state
//   }
// }

import { randomWord } from '../lib/game';

export default (state = {
  guesses: [],
  word: ''
}, action = {}) => {

  switch (action.type) {
  case 'NEW_GAME':
    return {
      ...state,
      word: randomWord()
    }

  case 'MAKE_GUESS':
    return {
      ...state,
      guesses: state.guesses.concat(action.letter)
    }
  default:
    break;
  }

  return state;
}
