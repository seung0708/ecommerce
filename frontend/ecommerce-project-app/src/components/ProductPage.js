import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';
import { getProduct } from '../actions/cart'




class ProductPage extends Component {
    state = {
        quantity: 1,
        add_to_cart: false
    }

    componentDidMount() {
        this.props.getProduct(this.props.history.location.pathname)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addToCart({...this.state, product: this.props.product.products})
        this.setState({add_to_cart: true})
    }

    handleChange = event => {
        this.setState({quantity: event.target.value})
    }

    render() {                
            
        return (
            <div className="product-page">
                <div className="product-page">
                    <div className="product-image">
                        <div className="product-page-image">
                             <img src={console.log(this.props.product.product)} alt="product"></img>
                            </div>
                            <div className="product-page-details">
                                <h3>{console.log(this.props)}</h3>
                                <h5>${this.props.product.price}</h5>
                                    <div className="add-to-cart-button">
                                    <form onSubmit={this.handleSubmit}>
                                        <button type="submit">Add To Cart</button>
                                        <label htmlFor="quantity">Qty:</label>
                                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}></input>
                                    </form>
                                </div>
                            </div>
                
                        <div className="product-page-desc">
                            <h3>Description</h3>
                            {<p>{this.props.product.description}</p>}
                        </div>
                    </div>
                 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      product: state.allProducts
    }
  }

const mapDispatchToProps = dispatch => ({
    addToCart: (product) => dispatch(addToCart(product)),
    getProduct:(product_id) => dispatch(getProduct(product_id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)