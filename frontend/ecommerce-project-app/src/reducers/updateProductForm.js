const initialState = {
    title: "",
    image: "",
    description: "",
    price: '',
    quantity: ''
}




export default (state= initialState, action) => {
    switch(action.type) {
        case "UPDATE_PRODUCT_FORM":
            const returnVal = {
                ...state, 
                [action.formData.name]: action.formData.value
            }
            return returnVal
        default:
            return state
    }
}