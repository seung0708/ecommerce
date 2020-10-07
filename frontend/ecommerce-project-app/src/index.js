import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './reducer/cartReducer'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

const store = createStore(
  combineReducers({
    cart: cartReducer
    // Your own reducers, sir
  })
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)