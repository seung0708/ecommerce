import React, { Component } from 'react'
//import CartItem from '../components/CartItem'


export default class CartContainer extends Component {

    /**mapCartItems = () => {
        this.props.cart_items.map(item => {
            <CartItem key={item.id} item={item} /> 
          })
    } */
    render() {
        return( 
            <div className="cart-container">
               <div className="cart" >
                   <h3>My Cart</h3>
                   <div className="cart-summary">
                    {this.mapCartItems()}
                    </div>
                    <div className="total-price">
                        <h3>Total: {this.props.total_price}</h3>
                    </div>
                    <div className="cart-checkout">
                        <button>Checkout</button>

                    </div>
               </div>
           </div>
        )
    }
} 