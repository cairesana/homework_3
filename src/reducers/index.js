// Create a store in the file `src/store.js` like you've learned,
// which requires an empty reducer which should be in `src/reducers/index.js`.


// export default (state = [], action = {}) => {
//   return state
// }


import { combineReducers } from 'redux'
import game from './game'

export default combineReducers(
  {game})
