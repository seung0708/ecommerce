
export const addToCart = data => {
    const productId = data.product.id 
    let quantity = data.quantity

    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/cart_items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Accept':'application/json'
            },
            body: JSON.stringify({product_id: productId, quantity: quantity})
        })
          .then(response => response.json())
          .then(data => {
              const cart = {
                  ...data.cart, cart_items: data.cart_items
              }
              dispatch({type: "NEW_CART", cart })
          });
    };
}

export const removeFromCart = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/carts", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Accept':'application/json'
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
          .then(response => response.json())
          .then(response => { 
                if (response.error) {
                    alert(response.error)
                }
                else { 
                 dispatch()
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
                
                }
          });
    };
}

/**export const fetchCart = () => {
    return (dispatch) =>{
        return fetch(`http://localhost:3001/products`)
        .then(response => response.json())
        .then(products => {
            dispatch()
        })
    }
} */ 