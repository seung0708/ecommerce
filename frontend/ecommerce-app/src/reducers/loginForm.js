const initialState = {
    username: "",
    password: ""
}

export default (state = initialState, action) => {
    switch(action.types) {
        case "UPDATE_LOGIN_FORM": 
            return action.formData;
        case "RESET_LOGIN_FORM":
            return initialState;
        default: 
            return state
    }
};