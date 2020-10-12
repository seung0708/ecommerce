import { createStore, applyMiddleware, compose, combineReducers} from 'redux'
import allProducts from './reducers/allProducts'
import cart from './reducers/cart'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signUpForm from './reducers/signUpForm'
import productForm from './reducers/productForm'
import updateProductForm from './reducers/updateProductForm'

const reducer = combineReducers({
    allProducts,
    cart,
    currentUser,
    loginForm, 
    signUpForm,
    productForm,
    updateProductForm
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store