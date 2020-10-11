import { setAllProducts, fetchProduct} from '../reducers/allProducts'

export const getAllProducts = () => {    
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
                dispatch(setAllProducts(response))
            }
        })
        .catch(console.log)
    }
}




export const getProduct = id => {    
    debugger
    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/products/${id}`, {
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