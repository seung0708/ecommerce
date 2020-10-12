import React from 'react';
import Home from './components/Home'
import Navbar from './components/NavBar'
import './App.css';
import {getAllProducts} from './actions/allProducts'
import {fetchCart} from './actions/cart'
import {connect} from 'react-redux'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'
import ProductPage from './components/ProductPage'
import Cart from './components/Cart'
import Signup from './components/SignUp';
//import Dashboard from './components/Dashboard'
import Login from './components/Login';
import { getCurrentUser } from './actions/currentUser'
import ProductForm from './components/ProductForm'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getAllProducts()
    this.props.fetchCart()
  }

  render() {
    const {createProduct } = this.props
    return(
        <div className="app">
          <Navbar location={this.props.location} history={this.props.history} />
         <Switch>
           <Route exact path='/' component={Home} />
           <Route exact path="/signup" render={({ history }) => <Signup history={history} />}/>
           <Route exact path="/login" component={Login} />
           <Route exact path="/products/new" render={props => <ProductForm onSubmit={createProduct} {...props} buttonText={"Create a Product"}/>} />
           
           
           <Route exact path='/products/:id' render={(routerProps) => 
           <ProductPage {...routerProps}/>}
           />
           <Route exact path='/cart' component={Cart}/>
           
         </Switch>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
   
    products: state.allProducts.products,
    cart: state.newCart
  }
}

export default withRouter(connect(mapStateToProps, {getAllProducts, fetchCart, getCurrentUser})(App));
