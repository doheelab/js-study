import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //added applyMiddleware
import thunk from 'redux-thunk'; // added

import App from './components/App';
import reducers from './reducers';

// const store = createStore(reducers)
const store = createStore(reducers, applyMiddleware(thunk)); // added applyMiddleware

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
