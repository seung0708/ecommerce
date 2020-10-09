const initialState = {
    carts: []
}


 export const cartReducer = (state = initialState,action)=>{
    switch(action.type) {
        case "NEW_CART":
            return {
                ...state, 
                cart: action.carts
            }
        
        default:
            return state;
    }
  }


 