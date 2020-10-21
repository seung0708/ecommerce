
const initialState = {
    addedProducts: [],
    products: []
}

export default (state = initialState, action) => {
   switch(action.type) {
        case "ADD_TO_CART": 
        
            return {
                ...state, 
                addedProducts: [...state.addedProducts]
            
            }
        
        case "ALL_PRODUCTS_IN_CART": 
        
            return {
                ...state, 
                addedProducts: action.addedProducts
            
            }
       
        case "REMOVE_FROM_CART": 
            return {
                ...state, 
                addedProducts: [...state.addedProducts.filter(product => product.id  !== action.id )]
            }
     
        case "SET_ALL_PRODUCTS":
            //debugger
            return {
                ...state,
                products: action.products
            }
       
        default: 
            return state

    }  
}
 


