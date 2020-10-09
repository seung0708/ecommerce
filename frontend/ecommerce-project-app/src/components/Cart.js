import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {removeFromCart, subractQuantityFromCart, addQuantityToCart} from '../actions/cartAction'

class Cart extends Component{
    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    }
    handleAddQuantity = (id)=>{
        this.props.addQuantityToCart(id);
    }
    handleSubtractQuantity = (id)=>{
        this.props.subractQuantityFromCart(id);
    }
    render(){
        //debugger
        let addedProducts = this.props.products.length ?
            (this.props.products.map(product =>{
                return(
                    <li className="collection-product" key={product.id}>
                      <div className="product-img"> 
                        <img src={product.img} alt={product.img} className=""/>
                      </div>
                                
                      <div className="product-desc">
                      <span className="title">{product.title}</span>
                        <p>{product.desc}</p>
                        <p><b>Price: {product.price}$</b></p> 
                        <p>
                            <b>Quantity: {product.quantity}</b> 
                        </p>
                      <div className="add-remove">
                          <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(product.id)}}>arrow_drop_up</i></Link>
                         <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(product.id)}}>arrow_drop_down</i></Link>
                      </div>
                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(product.id)}}>Remove</button>
                      </div>                
                    </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedProducts}
                    </ul>
                </div> 
                
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        products: state.addedProducts,

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        addQuantityToCart: (id)=>{dispatch(addQuantityToCart(id))},
        subractQuantityFromCart: (id)=>{dispatch(subractQuantityFromCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)