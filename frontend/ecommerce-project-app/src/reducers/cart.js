const initialState = {
    newCart: [],
    
}

export const addProduct = product => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

export const fetchProduct = product => {
    return {
        type: "FETCH_PRODUCT",
        product
    }
}

export const getCart = newCart => {
    return {
        type: "FETCH_CART",
        newCart
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                newCart: [...state.newCart, action.product]
            }
    case "FETCH_PRODUCT":
            return {
                ...state,
                product: action.product
            }
    case "FETCH_CART":
        return {
            ...state,
            newCart: action.cart
        }
        default:
            return state
    }
}