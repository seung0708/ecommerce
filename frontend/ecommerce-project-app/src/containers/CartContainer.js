import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, addQuantityToCart, subractQuantityFromCart} from '../actions/cartAction'

class CartContainer extends React.Component {

    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    }
    
    handleAddQuantity = (id)=>{
        this.props.addQuantityToCarts(id);
    }
    
    handleSubtractQuantity = (id)=>{
        this.props.subractQuantityFromCart(id);
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedProducts
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        addQuantityToCart: (id)=>{dispatch(addQuantityToCart(id))},
        subractQuantityFromCart: (id)=>{dispatch(subractQuantityFromCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartContainer)