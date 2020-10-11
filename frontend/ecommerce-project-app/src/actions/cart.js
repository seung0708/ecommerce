import { addProduct, fetchProduct, getCart} from '../reducers/cart'

export const addToCart = data => {
    const productId = data.product.dispatch
    let quantity = data.quantity
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/cart_items/", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({product_id: productId, quantity: quantity})
        })
        .then(res => res.json())
        .then(response => { 
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addProduct(response))
            }
        })
        .catch(console.log)
    }
} 


export const getProduct = () => {    
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/products`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => { 
            if (response.error) {
                alert(response.error)
            } else {                 
                dispatch(fetchProduct(response))
            }
        })
        .catch(console.log)
    }
}


export const fetchCart = id => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/carts`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => { 
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(getCart(response))
            }
        })
        .catch(console.log)
    }
} 
