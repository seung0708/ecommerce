import React, { Component } from 'react';
import {getAllProducts} from './actions/allProducts'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'



class App extends Component {

  componentDidMount() { 
    this.props.getAllProducts()
}
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

const mapStateToProps = state => {
  return {
  
    products: state.allProducts.products
  }
}


export default connect(mapStateToProps, {getAllProducts})(App)
