const initialState = {
    email: "",
    password: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP_FORM":
            return {
                
            }
        case "RESET_SIGNUP_FORM":
            return initialState
        default:
            return state
    }
}