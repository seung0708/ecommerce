import React, {Component} from 'react';
import {connect } from 'react-redux';
import {productsInCart, deleteProduct} from '../actions/cartActions'
import CartList from '../components/CartList'

class Cart extends Component {

    componentDidMount() {
        this.props.productsInCart() 
      
    } 
    render() {
        const {products, deleteProduct} = this.props
        let addProducts =  products.length > 0 ?  
        products.map(product => {
            return (        
                
               <CartList 
                    key={product.attributes.product.id} 
                    product={product} 
                    onCartListClick={() => deleteProduct(product.id)}
                    
                />
               
            )
        }) : <h4>Cart is Empty</h4>
            
        return(
            <div>
               {addProducts}
            </div>
        )
    }

}

const mapStateToProps = state => {
        
    return {
        products: state.cartReducer.addedProducts
    }
}


export default connect(mapStateToProps, {productsInCart, deleteProduct})(Cart)