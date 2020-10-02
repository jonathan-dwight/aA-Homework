import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.stae ?
  JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  // store.dispatch = logger(store);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// function logger(store) {
//   const next = store.dispatch;

//   return function addLoggingToDispatch(action) {
//     console.log('old state', store.getState())
//     console.log('dispatching', action)
//     let result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }
//   }




