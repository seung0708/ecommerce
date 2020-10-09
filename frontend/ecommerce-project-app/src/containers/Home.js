import React from 'react';
//import { connect } from 'react-redux'
//import {addProducts} from '../actions/cartAction' 
//import ProductList from '../components/ProductList'

import ProductListContainer from '../containers/ProductListContainer'
class Home extends React.Component {


  render(){
          return(
          <div>
            <h1>Welcome to VHS Nostalgia</h1>
            <ProductListContainer/>
  
          </div>             
          )
      }
  }


export default Home