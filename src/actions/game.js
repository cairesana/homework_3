// There should be a module in the file `src/actions/game.js` which exports two action creators.
// One should be called `newGame`, which creates an action of type `NEW_GAME`.
// The other action creator should be called `makeGuess`, and its actions should have the type `MAKE_GUESS`.


// action creator
export function newGame() {
  return {
    type: 'NEW_GAME',
  }
}

export function makeGuess(letter) {
  return {
    type: 'MAKE_GUESS',
    letter
  }
}

export function isGameFinished() {
  return {
    type: 'IS_GAME_FINISHED',
  }
}
