import React from 'react'
import Product from '../components/Product'

const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map(products.map(product => <Product title={product.title} price={product.price} description={product.description}/>))}
    </div>
)

export default ProductList

