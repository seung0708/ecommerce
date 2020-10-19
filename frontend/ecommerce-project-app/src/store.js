import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import allProducts from './reducers/allProducts'
import cartReducer from './reducers/cartReducer'
import thunk from 'redux-thunk'
import updateForm from './reducers/updateProduct'

const reducer = combineReducers({
    allProducts,
    cartReducer,
    updateForm
    
   
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store