import React from 'react';
import ProductForm from './ProductForm'
import {connect} from 'react-redux'
import {createProduct} from '../actions/productForm'


const NewProductForm = ({history, createProduct}) => {
    const handleSubmit = (formData, userId) => {
        createProduct({
            ...formData,
            userId
        }, history)
    }

    return <ProductForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, {createProduct})(NewProductForm)