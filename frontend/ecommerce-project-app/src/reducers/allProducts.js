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