import React, { Component } from 'react';

import Home from './components/Home'
import Navbar from './components/NavBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';
import {Route, Switch} from 'react-router-dom'




class App extends Component {

  render() {
    //const {products} = this.props 
    return(
         <div>
          <Header />
          <Navbar location={this.props.location}/>
          <Switch>
            <Route exact path='/' component={Home} /> 
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/products' component={ProductList} />
               
          </Switch>
          <Footer />
          </div>
          
    )
  }
}


export default App
