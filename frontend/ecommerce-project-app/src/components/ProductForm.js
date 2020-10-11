import React from 'react';
import {connect} from 'react-redux'
import {createProduct } from '../actions/productForm'

const ProductForm = ({ formData, createProduct, userId, handleSubmit}) => {
    
    const handleChange = event => {
        const {name, value} = event.target
        createProduct(name, value)
    }


    return(
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(formData)}}>

            <input placeholder="title" name="title" onChange={handleChange} />
            <br />
            <input placeholder="image" name="image" onChange={handleChange} />
            <br />
            <input placeholder="description" name="description" onChange={handleChange} />
            <input placeholder="price" name="price" onChange={handleChange} />
            <br />
            <input placeholder="quantity" name="quantity" onChange={handleChange} />
            <br />
            <input type="submit" value="Submit"/>
        </form>
    )
}

const mapStateToProps = state => {
    const {title, image, description, price, quantity } = state.createProduct
    const userId = state.currentUser ? state.currentUser.id : ''
    return {
        title,
        image,
        description,
        price, 
        quantity,
        userId
    }
}

export default connect(mapStateToProps, {createProduct})(ProductForm)