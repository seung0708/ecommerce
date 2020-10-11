import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProductList extends Component {

    handleClick = () => {
        this.props.history.push(`/${this.props.product.id}`)
    }

    render() {
        return (
            <div >
                <ul>
                    <li>
                        {this.props.product.name}
                    </li>     
                </ul>
            </div>
        );
    }
}


export default connect()(ProductList);