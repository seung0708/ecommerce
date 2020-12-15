const allProductsInCart = addedProducts => {
    return{
        type: "ALL_PRODUCTS_IN_CART",
        addedProducts
    }
}

const addToCart = id => {
    
    return {
        type: "ADD_TO_CART",
        id
    } 

}   

const setAllProducts = products => {
    return {
        type: "SET_ALL_PRODUCTS",
        products
    }
} 

const removeFromCart = id => {
    
    return {
        type: "REMOVE_FROM_CART",
        id
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

    export const deleteProduct = id => {
        //debugger
        return dispatch => {
         dispatch(removeFromCart(id))
          return fetch(`http://localhost:3001/api/v1/cart_products/${id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json"
            }
          })
        }
    }