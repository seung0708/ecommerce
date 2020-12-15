export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = user => {
    return {
        type: "CLEAR_CURRENT_USER",
        user
    }

}

export const updateSignupForm = formData => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

export const updateLoginForm = () => {
    return {
        type: "UPDATE_LOGIN_FORM"
    }
}

export const resetLoginForm = () => {
    return {
        type: "RESET_LOGIN_FORM"
    }
}


export const login = (credentials) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
         .then(r => r.json())
         .then(r => {
             if (r.error) {
                 alert(r.error)
             }
             else {
                 dispatch(setCurrentUser(r.data))
                 dispatch(resetLoginForm())
             }
         })
         .catch(console.log)
    }
};


export const signup = credentials => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/users`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
         .then(r => r.json())
         .then(r => {
             if (r.error) {
                 alert(r.error)
             }
             else {
                 dispatch(setCurrentUser(r.data))
                 dispatch(resetSignupForm())
             }
         })
         .catch(console.log)
    }
}

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser()) 
        return fetch(`http://localhost:3001/api/v1/logout`,{
            credentials: "include",
            method: "DELETE"
        }) 
    }
}

export const getCurrentUser = credentials => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/logged_in`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
         .then(r => r.json())
         .then(r => {
             if (r.error) {
                 alert(r.error)
             }
             else {
                 dispatch(setCurrentUser(r.data))
                 dispatch(resetSignupForm())
             }
         })
         .catch(console.log)
    }
}