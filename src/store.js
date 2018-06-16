// Create a store in the file `src/store.js` like you've learned,
// which requires an empty reducer which should be in `src/reducers/index.js`.

import { createStore } from 'redux'
import reducer from './reducers'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store
