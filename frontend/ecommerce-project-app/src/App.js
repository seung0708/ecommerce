import React, {Component, Fragment}  from 'react';
import './App.css';
import {Switch, Route}from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './containers/Home'
import About from './containers/About'
import ProductPage from './containers/ProductPage'
import CartContainer from './containers/CartContainer'
import Navbar from './components/Navbar'
import {fetchProducts} from './actions/productsAction'
//import {fetchCart} from './actions/cartAction'


class App extends Component{
  componentDidMount() {
    this.props.fetchProducts()
    //this.props.fetchCart()
  }
 
  render(){
    return (
      <Fragment>
         <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/products' component={ProductPage} />
            <Route exact path='/cart' component={CartContainer} />
        </Switch>        
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts: fetchProducts,
  //fetchCart: fetchCart
}

export default connect(null,mapDispatchToProps)(App)