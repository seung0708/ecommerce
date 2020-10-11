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
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import { checkLoggedIn} from './actions/userActions'


class App extends React.Component {
  state = {
    loading: true,
  };

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };


  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading);
    this.props.getAllProducts()
    this.props.fetchCart()
  }

  render() {
    if (this.state.loading) return <h1>Loading...</h1>;
    return(
        <div className="app">
          <Navbar />
         <Switch>
           <Route exact path='/' component={Home} />
           <Route
              path="/dashboard"
              render={(props) => {
                if (this.props.loggedIn) {
                  return <Dashboard {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }}
            />
           <Route exact path='/products/:id' render={(routerProps) => 
           <ProductPage {...routerProps}/>}
           />
           <Route exact path='/cart' component={Cart}/>
           <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
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

export default withRouter(connect(mapStateToProps, {getAllProducts, fetchCart, checkLoggedIn })(App));
