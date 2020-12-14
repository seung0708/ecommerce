import React from 'react'



const ProductList = ({product, onProductListClick}) =>{ 
    return(
       

        <div className="col-sm-3" key={product.attributes.id}>
           
            <img src={product.attributes.image} alt="hello" height="250"></img>
            <h6>{product.attributes.title}</h6>
            <p>{product.attributes.description}</p>
            <h6>${product.attributes.price}</h6>
            <br />
            <button  onClick={onProductListClick}>Add To Cart</button>
        </div> 
        
    )
}

export default ProductList