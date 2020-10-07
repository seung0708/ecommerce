const initialState = {
    products: [], 
    addedProducts: [],
    total: 0
}


const cartReducer= (state = initialState,action)=>{
    
   switch(action.type) {
    
       case "ADD_TO_CART":
        let addedProduct = state.products.find(product => product.id === action.id)
        let existedProduct = state.addedProducts.find(product => product.id === action.id)
           if(existedProduct) {
                addedProduct +=1
                return {
                    ...state, 
                    total: state.total + addedProduct.price
                 }
            }
            else {
                addedProduct.quantity = 1;
                let newTotal = state.total + addedProduct.price

                return{
                    ...state,
                    addedProducts: [...state.addedProducts, addedProduct],
                    total : newTotal
                }
            }
      case "REMOVE_PRODUCT":
            let productToRemove= state.addedProducts.find(product => product.id === action.id)
            let new_products = state.addedProducts.filter(product => product.id !== action.id)
            let newTotal = state.total - (productToRemove.price * productToRemove.quantity)
                return{
                    ...state,
                    addedProducts: new_products,
                    total: newTotal
                }
      case "ADD_QUANTITY":
            addedProduct.quantity += 1 
            
                return{
                ...state,
                total: newTotal
            }
        case "SUB_QUANTITY":
            let addedItem = state.items.find(item=> item.id === action.id) 
   
            if(addedItem.quantity === 1){
                let new_items = state.addedItems.filter(item=>item.id !== action.id)
               
                return{
                ...state,
                 addedItems: new_items,
                total: newTotal
                 }
            }
            else {
                addedItem.quantity -= 1
                
                return{
                    ...state,
                    total: newTotal
                }
            }
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