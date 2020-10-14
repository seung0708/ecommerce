const initialState = {
    products: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "SET_ALL_PRODUCTS":
            return {
                ...state,
                products: action.products
            } 
        case "ADD_PRODUCT":
            return { 
                
                ...state,
                product: action.product
            }
        case "FETCH_PRODUCT":
            return {
                ...state, 
                product: action.product
            }
        default:
            return state 
    }
}

export const setAllProducts = products => {
    return {
        type: "SET_ALL_PRODUCTS",
        products
    }
}


export const fetchProduct = product => {
    return {
        type: "FETCH_PRODUCT",
        product
    }
}


export const addProduct = product => {
    return {
        type: "ADD_PRODUCT",
        product
    }
}

