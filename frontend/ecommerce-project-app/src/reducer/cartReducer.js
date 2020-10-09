const initialState = {
    cartNumbers: 0,
    addedProducts: [],
    total: 0
}


const cartReducer= (state = initialState,action)=>{
    
   switch(action.type) {
       case "ADD_TO_CART": 
       
       case "REMOVE_PRODUCT":
       case "ADD_QUANTITY":
       case "SUB_QUANTITY":
       default:
            return state
    }  
  
}

export default cartReducer

export const addToCart = (id)=>{
    return{
        type: "ADD_TO_CART",
        id
    }
}

export const removeProduct = (id)=>{
    return{
        type: "REMOVE_PRODUCT",
        id
    }
}

export const subtractQuantity=(id)=>{
    return{
        type: "SUB_QUANTITY",
        id
    }
}

export const addQuantity=(id)=>{
    return{
        type: "ADD_QUANTITY",
        id
    }
}