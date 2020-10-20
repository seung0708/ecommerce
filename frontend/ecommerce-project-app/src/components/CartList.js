import React from 'react'

const CartList = ({product}) => {
    
    
    return (
        <div className="cart-list" key={product.attributes.product.id}>
            <table>
                <tbody>
                <tr>
                    <td>Qty: {product.attributes.quantity}</td>
                    <td><img src={product.attributes.product.image} alt="hello" height="100px"/></td>
                    <td>{product.attributes.product.title}</td>
                    <td>{product.attributes.product.description}</td>
                    <td>$ {product.attributes.product.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}


export default CartList