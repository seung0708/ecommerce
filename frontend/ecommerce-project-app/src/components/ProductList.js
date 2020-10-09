import React from 'react';
import Product from '../components/Product';

const ProductList = (products) => (
    <div className="product-list">
        { products.map(product => <Product title={product.title} />)}
    </div>
    
)

export default ProductList 