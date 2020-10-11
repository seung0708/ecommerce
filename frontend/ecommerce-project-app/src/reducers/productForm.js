const initialState = {
    title: "",
    description: "",
    image: "",
    price: "",
    quantity: ""
  }

export const addProduct = product => {
    return {
        type: "ADD_PRODUCT",
        product
    }
}

export default(state = initialState, action) => {
    switch(action.types) {
        case "ADD_PRODUCT":
            return {
                ...state,
                [action.formData.name]: action.formData.value
                
            }
    }
}