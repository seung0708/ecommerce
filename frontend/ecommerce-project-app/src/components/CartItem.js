import React, {Component, Fragment} from 'react';
//import { Link } from 'react-router-dom'
import { removeFromCart } from '../actions/cartAction';
import { connect } from 'react-redux'

// import {removeFromCart, subractQuantityFromCart, addQuantityToCart} from '../actions/cartAction'

class CartItem extends Component{
    
    handleRemove = event =>{
        this.props.removeFromCart(this.props.item.id);
    }

    render() {
        return(
          <Fragment>
              <div key={this.props.item.id} className="cart_item">
                  <div className="cart-item-image">
                      <img src={this.props.item.product.image} alt="cart" ></img>
                  </div>
                  <div className="cart-item-details">
                      <div className="cart-item-title">
                          <h4>{this.props.item.product.title}</h4>
                      </div>
                      <div className="cart-item-remove">
                        <span onClick={this.handleRemove}></span>
                      </div>
                      <div className="cart-item-price">
                            <h3>{this.props.item.item_price}</h3>
                      </div>
                      <div className="cart-item-quantity">
                          <p>Qty: {this.props.item.quantity}</p>
                      </div>
                  </div>
              </div>
          </Fragment>
                 
            )
    }
}


    const mapDispatchToProps = dispatch => ({
        removeFromCart: (item_id) => dispatch(removeFromCart(item_id))
    })



export default connect(null, mapDispatchToProps)(CartItem)