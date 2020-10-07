import React from 'react';

import { Link } from 'react-router-dom'

const cartDisplay = props => {
    let addedProducts = this.props.products.length ?
        (  
          this.props.items.map( product => {
            return(
                <li className="collection-item avatar" key={product.id}>
                    <div className="product-img"> 
                         <img src={product.img} alt={product.img}/>
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

export default cartDisplay