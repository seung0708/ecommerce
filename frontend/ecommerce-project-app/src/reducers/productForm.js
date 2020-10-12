const initialState = {
    myProducts: []
}


export default(state = initialState, action) => {
    switch(action.types) {
        case "ADD_PRODUCT":
            return {
                ...state,
                myProducts: action.product}
        default:
            return state
    }
} 