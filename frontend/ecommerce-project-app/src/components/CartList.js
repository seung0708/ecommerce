import React from 'react'



const CartList = ({product}) => {
    
    return (
        <div className="cart-list" key={product.id}>
            <table>
                <tbody>
                <td>Qty: {product.attributes.quantity}</td>
                <td><img src={product.attributes.product.image} height="100px"/></td>
               
                <td>{product.attributes.product.title}</td>
                <td>{product.attributes.product.description}</td>
                <td>$ {product.attributes.product.price}</td>
                <t><button>Remove Item</button></t>
                </tbody>
            </table>
        </div>
    )

}


export default CartList