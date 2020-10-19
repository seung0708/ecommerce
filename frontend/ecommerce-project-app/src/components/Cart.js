import React, {Component} from 'react';
import {connect } from 'react-redux';
import {productsInCart} from '../actions/cartActions'
import CartList from './CartList'

class Cart extends Component {
    componentDidMount() {
        
        this.props.productsInCart() 
        
    }

    render() {
        let addProducts = this.props.products.length > 0 ? (
           this.props.products.map(product => { 
            {console.log(product.attributes.product.id)}
                return (
                 <CartList key={product.attributes.product.id} product={product}/>
                )
            })
        ) : 
        (
            <p>Cart is Empty</p>
        ) 

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


export default connect(mapStateToProps, {productsInCart})(Cart)