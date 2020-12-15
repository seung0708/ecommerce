import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import cartReducer from './reducers/cartReducer'
import thunk from 'redux-thunk'
//import userReducer from './reducers/userReducer'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import currentUser from './reducers/currentUser'

const reducer = combineReducers({
    cartReducer,
    currentUser,
    signupForm,
    loginForm  
})
 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store