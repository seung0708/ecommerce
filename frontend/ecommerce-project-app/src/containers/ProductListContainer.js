import React from 'react'
import ProductList from '../components/ProductList'

export default class ProductListContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            products: []
        }
    }

    render() {
        return <ProductList products={this.state.products} />
    }
}