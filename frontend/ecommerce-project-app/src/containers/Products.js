import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {addCart, getAllProducts} from '../actions/cartActions'
import ProductList from '../components/ProductList'


class Products extends Component {
    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        const {products, addCart} = this.props
        const productCards = products.map(product =>  { 
            return(
              <ProductList 
               key={product.attributes.id} 
               product={product}
               onProductListClick={() => addCart(product)}
              /> 
            ) 
        })
        return(
            <div className="product-list">
                {productCards}
            </div>
        ) 
    }
} 

const mapStateToProps = state => {
    return {
      products: state.cartReducer.products
    }
    
  }

export default connect(mapStateToProps, {addCart, getAllProducts})(Products)