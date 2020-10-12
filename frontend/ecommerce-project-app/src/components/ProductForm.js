import React from 'react';
import {connect} from 'react-redux'
import {createProduct } from '../actions/productForm'
import {updateProductForm} from '../actions/updateProductForm'

const ProductForm = ({ formData, history, updateProductForm, createProduct, userId}) => {
    const {title, image, description, price, quantity } = formData

    const handleChange = event => {
        const {name, value} = event.target
        updateProductForm(name, value)
    }

    const handleSubmit =event => {
        event.preventDefault()
        createProduct(
            ...formData,
            userId)
    }

    return(
        <form onSubmit={handleSubmit}>

            <input placeholder="title" name="title" onChange={handleChange} value={title}/>
            <br />
            <input placeholder="image" name="image" onChange={handleChange} value={image}/>
            <br />
            <input placeholder="description" name="description" onChange={handleChange} value={description}/>
            <br />
            <input placeholder="quantity" name="quantity" onChange={handleChange} value={quantity}/>
            <br />
            <input placeholder="price" name="price" onChange={handleChange} value={price}/>
            <br />
            <input type="submit" value="Submit"/>
        </form>
    )
}

const mapStateToProps = state => {
    //debugger
   const userId = state.currentUser ? state.currentUser.id : ''
    return {
        formData: state.productForm,
        userId
    }
}

export default connect(mapStateToProps, {createProduct, updateProductForm})(ProductForm)