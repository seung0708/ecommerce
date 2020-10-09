import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './reducer/cartReducer'
import productReducer from './reducer/productReducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)