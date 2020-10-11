  import React, { Component } from 'react'
import {connect} from 'react-redux';
import CartItem from './CartItem'

class Cart extends Component {

    totalPrice() {
        if (this.current_order()) {
           return <h3>Total Price: ${this.current_order().total_price}</h3>
        }
    }

    mapOverCartItems = () => {   
        console.log(this.props)
        this.props.cart_items.map((item) => {
            return <CartItem key={item.id} history={this.props.history} item={item} />
        })
    }
    
    
    
    
    render() {  
    
        return (
            <div className="cart-container">
                <div className="cart-section">
                    <h3>My Cart</h3>
                        {console.log(this.props)}
                        {/** this.props.cart_items.map((item) => {
                            return <CartItem key={item.id} history={this.props.history} item={item} />
                        }) */}
                    <div className="cart-summary-div">
                        <div className="total-price">
                            {this.props.cart.total_price}
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart.newCart
    }
}


export default connect(mapStateToProps)(Cart)