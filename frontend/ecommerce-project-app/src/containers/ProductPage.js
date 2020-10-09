import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { fetchProduct} from '../actions/productsAction'
class ProductPage extends Component {
    state = {
        quantity: 1,
        add_to_cart: false
    }

    componentDidMount() {
        this.props.fetchProduct()
    
    }
    handleChange = event => {
        this.setState({quantity: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToCart({...this.state, product: this.props.product})
        this.setState({add_to_cart: true})
    }

    render() {
        return(
            <div className="product-page-container">
                <div className="product-page">
                    <div className="product-image">
                        <img alt="product"></img>
                    </div>
                    <div className="product-details">
                        <h3>{this.props.product.title}</h3>
                        <h5>{this.props.product.price}</h5>
                        <div className="add-to-cart-button">
                            <form onSubmit={this.handleSubmit} >
                                <button type="submit">Add To Cart</button>
                                <label>Qty:</label>
                                <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
                            </form>
                        </div>
                    </div>
                    <div className="product-description">
                    <h3>Description</h3>
                    <p>{this.props.product.description}</p>
                </div>
               
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product
})

const mapDispatchToProps = dispatch => ({
    addToCart: (singleProduct) => dispatch(addToCart(singleProduct)),
    fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)