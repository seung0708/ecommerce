import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {addCart, getAllProducts} from '../actions/cartActions'



class ProductList extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    handleClick = product => {
        this.props.addCart(product)
    }
    render() {
        console.log(this.props.products)
        const productCards = this.props.products.map(product =>  {
           
            return(
                <div>
                    <div className="col-sm-3" key={product.attributes.id}>
                        <img src={product.attributes.image} alt="hello" height="250"></img>
                        <h1>{product.attributes.title}</h1>
                        <h3>{product.attributes.description}</h3>
                        <h4>${product.attributes.price}</h4>
                        <button  onClick={() => {this.handleClick(product)}}>Add To Cart</button>
                    </div>
                </div>
            ) 
        })
        return(
            <div className="product-list">
                {productCards}
            </div>
        )
    }
} 

const mapStateToProps = state => {
    
    return {
      products: state.cartReducer.products
    }
    
  }

export default connect(mapStateToProps, {addCart, getAllProducts})(ProductList)