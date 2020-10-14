import React, { Component } from 'react';
import {getAllProducts} from './actions/allProducts'
import Home from './components/Home'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import Header from './components/Header'
import './App.css';
import {Route, Switch} from 'react-router-dom'

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ProductCard from './components/ProductCard'
import ProductForm from './components/ProductForm';


class App extends Component {

  componentDidMount() {
    this.props.getAllProducts()
}
  render() {
    const {products} = this.props 
    return(
         <div>
          <Header />
          <Navbar location={this.props.location}/>
          <Switch>
            <Route exact path='/' component={Home} /> 
               <Route exact path='/products/new' component={ProductForm} />
                <Route exact path='/products' component={ProductList} />
                <Route exat path='/products/:id'   render={props => {
                  const product = products.find(product => product.id === props.match.params.id)
                  console.log(product)
                  return <ProductCard product={product} {...props} />
                }}/>
           
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


export default withRouter(connect(mapStateToProps, {getAllProducts})(App))
