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

import { randomWord, gameFinished, isWinner } from '../lib/game';

export default (state = {
  guesses: [],
  word: '',
  finished: false,
  hasWon: false,
}, action = {}) => {


  switch (action.type) {
  case 'NEW_GAME':
    return {
      ...state,
      word: randomWord(),
      finished: false,
      hasWon: false,
      guesses: [] //reseta e volta ao estado inicial
    }

  case 'MAKE_GUESS':
    return {
      ...state,
      guesses: state.guesses.concat(action.letter)
    }

  case 'IS_GAME_FINISHED':
    return {
      ...state,
      finished: gameFinished(state.word, state.guesses),
      hasWon: isWinner(state.word, state.guesses)
    }


  default:
    break;
  }

  return state;
}
