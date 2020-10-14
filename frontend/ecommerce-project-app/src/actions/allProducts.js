import {setAllProducts, addProduct} from '../reducers/allProducts'

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

 

export const createProduct = (productData ) => {
    return dispatch => {
        const sendableProductData = {
            title: productData.title,
            image: productData.image,
            description: productData.description,
            quantity: productData.quantity,
            price: productData.price
        }
        return fetch("http://localhost:3001/api/v1/products", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sendableProductData)
        })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else 
            dispatch(addProduct(response.data))
        })
    }
}