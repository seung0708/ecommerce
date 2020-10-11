import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class ProductCard extends Component {

    handleClick = () => {
        console.log(this.props)
        //this.props.push(`${this.props.history.product.id}`)
    }

    render() {
        return (
            <article className="card" >
                <Link href=" " onClick={this.handleClick}>
                    <picture className="thumbnail">
                        <img src={this.props.product.image} alt="A banana that looks like a bird"></img>
                    </picture>
                    <div className="card-content">

                        <h2>{this.props.product.name}</h2>
                        <p>{this.props.product.description}</p>
                        <h3>${this.props.product.price}</h3>
                       
                    </div>
                </Link>
            </article>
    )
    }
}



export default ProductCard