import React, { Component } from 'react';
import Home from './components/Home'
import Navbar from './components/NavBar'
import Cart from './containers/Cart'
import PageNotFound from './components/PageNotFound'
//import Footer from './components/Footer'
//import Header from './components/Header'
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {

  render() {
   
    return(
         <div>
          <Navbar/>
          <Switch>
            <Route exact path='/cart' component={Cart} />
            <Route path='/not-found' component={PageNotFound} />
            <Route exact path='/' component={Home} /> 
            <Redirect to='/not-found' />
          </Switch>
          </div>
          
    )
  }
}

const mapStateToProps = state => {
        
  return {
      products: state.cartReducer.addedProducts
  }
}


export default  App
