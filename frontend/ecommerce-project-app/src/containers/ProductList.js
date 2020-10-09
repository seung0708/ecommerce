import React, {Component} from 'react';


class ProductList extends Component {
    handleClick = () => {
      this.props.history.push(`http://localhost:3001/api/v1/products/{this.props.product.id}`)
    }
    
    render() {
      <div onClick={this.handleClick}>
        <ul>
          <li>
            {this.props.product.name}
          </li>
        </ul>
    
      </div>
    }
  }

export default ProductList 