import React from 'react' 
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

const ProductList = props => {
    const productCards = 
      props.products.map(product => 
            (
                <Link to={`/products/${product.id}`}>
                    <div key={product.id} className="col-sm-3">
                        <img src={product.attributes.image} height="500px"/>
                    </div>
                </Link>
            )
        ) 
    
  
    return productCards
  }

const mapStateToProps = state =>{
    return {
        products: state.allProducts.products
    }
} 

export default connect(mapStateToProps)(ProductList)