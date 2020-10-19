const initialState = {
    addedProducts: [],
  
   
    
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
        let addedProduct = state.products.find(product => parseInt(product.id) === action.id.attributes.product_id)
        if (addedProduct) {
            return {
                ...state, 
                addedProducts: [...state.addedProducts, addedProduct],
            
            }
        }
        case "ALL_PRODUCTS_IN_CART": {
            //debugger
            return {
                ...state, 
                addedProducts: action.addedProducts,
            
            }
            
        }
        default: 
            return state

    }  
}



