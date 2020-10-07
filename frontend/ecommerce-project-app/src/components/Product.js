import React from 'react';

const Product = ({title, image, description, price}) => (
    <div className="product">
        <h3>{title}</h3>
        <image src={image} alt={title} />
        <p>{descprition}</p>
        <p>{price}</p>
    </div>
)

export default Product;