import React from 'react'
import {Link} from 'react-router-dom'
import PageNotFound from './PageNotFound'
const ProductCard = ({ product }) => {
  return (
      product ?
      <div>
        <div className="product-card">
            <h1>{product.attributes.title}</h1>
             <img src={product.attributes.image} height="500"></img>
             <h3>{product.attributes.description}</h3>
             <h4>${product.attributes.price}</h4>
        </div>

      </div>
        : <PageNotFound />
  )
}

export default ProductCard
    
