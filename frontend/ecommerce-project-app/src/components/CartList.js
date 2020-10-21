import React from 'react'

const CartList = ({product, onCartListClick}) => {
    
    return (
        <div key={product.attributes.product.id}>
            
            <table className="cart-list" >
                <thead>
                   <tr>
                    <th>Qty</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr >
                    <td>{product.attributes.quantity}</td>
                    <td><img src={product.attributes.product.image} alt="hello" height="100px"/></td>
                    <td>{product.attributes.product.title}</td>
                    <td>{product.attributes.product.description}</td>
                    <td>${product.attributes.product.price}</td>
                    <td><button onClick={onCartListClick}>Remove</button></td>
                   
                </tr>
                </tbody>
            </table>
        </div>
    )

}


export default CartList