import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import allProducts from './reducers/allProducts'
import cart from './reducers/cart'
import user from './reducers/userActions.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    allProducts,
    cart,
    user
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store