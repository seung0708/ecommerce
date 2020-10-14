import React from 'react';

import { updateProduct } from '../actions/updateProduct'
import { connect } from 'react-redux'
import { createProduct } from '../actions/allProducts';



const ProductForm = ({ formData, updateProduct, createProduct }) => {
  
  const { title, description, image, price } =  formData

  const handleChange = event => {
    const { name, value } = event.target
    updateProduct(name, value)
  }

  const handleSubmit = event => {
      event.preventDefault()
      createProduct({ 
         ...formData
      })
  }

  
  return (
    
    <form class="product-form" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input  name="title" onChange={handleChange} value={title}/>
  
      <br/>
      <label>Description:</label>
      <input  name="description" onChange={handleChange} value={description}/>
      <br/>
      <label>Image Link: </label>
      <input  name="image" onChange={handleChange} value={image}/>
      <br/>
      <label>Price:</label>
      <input  name="price" onChange={handleChange} value={price}/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
)};

const mapStateToProps = state => {
  return {
    formData: state.updateForm,

  }
}


export default connect(mapStateToProps, { updateProduct, createProduct })(ProductForm)
