const initialState = {
    allProducts: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_PRODUCTS": 
            return {
                ...state, 
                allProducts: [...state.allProducts, action.product]
            }
        default:
            return state
    }
};

export default productReducer

export const getAllProducts = allProducts => {
    return {
        type: "GET_ALL_PRODUCTS",
        allProducts
    }
}; 