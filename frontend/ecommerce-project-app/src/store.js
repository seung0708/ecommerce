import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import cartReducer from './reducers/cartReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    cartReducer
    
   
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store