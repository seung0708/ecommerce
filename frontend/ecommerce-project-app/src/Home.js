import React from 'react';
import { connect } from 'react-redux'
import {addProducts} from './actions/cartAction' 
import ProductList from './components/ProductList'
class Home extends React.Component {
    
  handleClick = (id)=>{
      this.props.addProducts(id); 
  }

  render(){
          return(
          <div> 
            <ProductList />
          </div>             
          )
      }
  }

const mapStateToProps = (state)=>{
  return {
    products: state.products
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addProducts(id))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)