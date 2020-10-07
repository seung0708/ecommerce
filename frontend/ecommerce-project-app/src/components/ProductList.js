import React from 'react'

export default ProductList = ({ products }) => (
    <div className="product-list">
        {products.map(products.map(product => <Product title={product.title} price={product.price} description={product.description}/>))}
    </div>
)