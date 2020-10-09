import React from 'react';
 
const Product = ({ title, image, description, price }) => (
  <div className="product">
    <img src={ image } alt={title}/>
    <h3>{ title }</h3>
    <p>{description}</p>
    <p>{price}</p>
  </div>
)
 
export default Product;