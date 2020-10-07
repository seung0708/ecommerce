import React from 'react';

const Product = ({title, image, description, price, id}) => (
    <div className="card" key={id}>
<div className="card-image">
    <img src={image} alt={title}/>
    <span className="card-title">{title}</span>
    <span to="/" className="" onClick={()=>{this.handleClick(id)}}><i className="material-icons">add</i></span>
</div>

<div className="card-content">
    <p>{description}</p>
    <p><b>Price: {price}$</b></p>
</div>
</div>
)

export default Product;