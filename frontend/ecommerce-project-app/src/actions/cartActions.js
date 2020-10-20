export const allProductsInCart = addedProducts => {
    return{
        type: "ALL_PRODUCTS_IN_CART",
        addedProducts
    }
}

export const addToCart = id => {
    console.log(id)
    return {
        type: "ADD_TO_CART",
        id
    } 

} 

export const setAllProducts = products => {
    return {
        type: "SET_ALL_PRODUCTS",
        products
    }
}

export const addCart = id => {
    return dispatch => {
       
        return fetch(`http://localhost:3001/api/v1/cart_products`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        .then(res => res.json()) 
            .then(response => { 
                if (response.error) {
                    alert(response.error)
                } else {                 
                    dispatch(addToCart(response.data))
                }
            })
            .catch(console.log)
        }
    }

    export const productsInCart = () => {
       
        return dispatch => {
           
            return fetch(`http://localhost:3001/api/v1/cart_products`, {
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
                    dispatch(allProductsInCart(response.data))
                }
            })
            .catch(console.log)
        }
    }
    
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
                    dispatch(setAllProducts(response.data))
                }
            })
            .catch(console.log)
        }
    }   