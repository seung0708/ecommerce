import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ProductCard extends Component {
    handleClick = () => {
        //debugger
        this.props.history.push(`http://localhost:3001/products/${this.props.product.id}`)
    }

    render() {
        return (
            <div className="product-card">
                <Link href="" onClick={this.handleClick}>
                    <div className="product-card-image">
                        <img alt="product"></img>
                    </div>
                    <div className="card-content">
                        <h2>{this.props.product.title}</h2>
                        <p>{this.props.product.description}</p>
                        <h2>{this.props.product.price}</h2>
                    </div>
                </Link>
            </div>
            
        )
    }
}