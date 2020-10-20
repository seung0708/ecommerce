const initialState = {
    addedProducts: [],
    products: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART": 
       
        if (state.products) {
           
            return {
                ...state, 
                addedProducts: state.addedProducts
            
            }
        }
        case "ALL_PRODUCTS_IN_CART": {
            return {
                ...state, 
                addedProducts: action.addedProducts,
            
            }
        }
        case "SET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.products
            }
        default: 
            return state

    }  
}



