export default (state = null, action) => {
    switch(action.types) {
        case "SET_CURRENT_USER": 
            return action.user;
        case "CLEAR_CURRENT_USER":
            return null;
        default: 
            return state;
    }
};