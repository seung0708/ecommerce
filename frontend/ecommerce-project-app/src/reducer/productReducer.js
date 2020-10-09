
const initialState = {
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_PRODUCTS":
            return action.products
        default: 
            return state
    }
}