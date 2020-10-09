import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router}from 'react-router-dom'
import productReducer from './reducer/productReducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  products: productReducer,
  
})

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>,
document.getElementById('root')
)