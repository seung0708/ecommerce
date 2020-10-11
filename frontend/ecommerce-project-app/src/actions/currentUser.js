//import { resetLoginForm } from './loginForm'
//import { resetSignUpForm } from './signUpForm'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = (credentials, history) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/login`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify( credentials),
      })
        .then((res) => res.json())
        .then(response => {
         if (response.error) {
             alert(response.error)
         } else {
             dispatch(setCurrentUser(response))
             //dispatch(resetLoginForm())
             history.push('/dashboard')
         }
        
        })
        .catch(console.log())
    };
  };


  export const signup = (credentials, history) => {
    return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/signup`, {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: credentials }),
      })
        .then((res) => res.json())
        .then(response => {
         if (response.error) {
             alert(response.error)
         } else {
             dispatch(setCurrentUser(response))
             //dispatch(resetSignUpForm())
             history.push('/dashboard')
         }
        
        })
        .catch(console.log())
    };
  };


export const logout = () => {
   return (dispatch) => {
    dispatch(clearCurrentUser)
    fetch(`http://localhost:3001/api/v1/logout`, {
        credentials: 'include',
        method: 'DELETE',
        })
    };
  };

export const getCurrentUser = () => {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/get_current_user`, {
          credentials: 'include',
          method: "GET",
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response))
            }
           
           })
           .catch(console.log())
    };
};