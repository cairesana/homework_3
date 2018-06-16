// 1. Add the `Provider` component to your `src/index.js`.(---DONE---)

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),

)

registerServiceWorker();



//To tell React where it can find the Redux store we have to wrap our App component in a Provider component.
