import { addToCart, removeProduct, subtractQuantity, addQuantity} from '../reducer/cartReducer'


export const addProducts = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/carts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
          .then(response => response.json())
          .then(response => { 
                if (response.error) {
                    alert(response.error)
                }
                else { 
                dispatch(addToCart(response.data))
                }
          });
    };
}

export const removeFromCart = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/carts", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
          .then(response => response.json())
          .then(response => { 
                if (response.error) {
                    alert(response.error)
                }
                else { 
                dispatch(removeProduct(response.data))
                }
          });
    };
}

export const subractQuantityFromCart = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/carts", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
          .then(response => response.json())
          .then(response => { 
                if (response.error) {
                    alert(response.error)
                }
                else { 
                dispatch(subtractQuantity(response.data))
                }
          });
    };
}

export const addQuantityToCart = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/carts", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
          .then(response => response.json())
          .then(response => { 
                if (response.error) {
                    alert(response.error)
                }
                else { 
                dispatch(addQuantity(response.data))
                }
          });
    };
}