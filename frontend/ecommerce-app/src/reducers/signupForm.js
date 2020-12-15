const initialState = {
    username: "",
    email: "",
    password: ""
}

export default (state = initialState, action) => {
    switch(action.types) {
        case "UPDATE_SIGNUP_FORM":
            return action.formData;
        case "RESET_SIGNUP_FORM":
            return initialState;
        default: 
            return state
    }
};