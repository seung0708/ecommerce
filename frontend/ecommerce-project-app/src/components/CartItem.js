import React, { Component, Fragment } from 'react'
//import { connect } from 'react-redux';

class CartItem extends Component {
    render() {                
        return (
            <Fragment>
                <div key={this.props.item.id} className="cart-item">
                    <div className="cart-item-image">
                        <img src={this.returnImage()} alt="A banana that looks like a bird"></img>
                    </div>
                    <div className="cart-item-details">
                        <div className="cart-item-name">
                            <h4>{this.props.item.product.name}</h4>
                        </div>
                        
                    </div>
                    <div className="cart-item-price-qty">
                        <div className="cart-item-price">
                            <h2>${this.props.item.item_price}</h2>
                        </div>
                        <div className="cart-item-qty">
                            <p>Qty: {this.props.item.quantity}</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CartItem