import {addProduct} from '../reducers/productForm'


export const createProduct = (productData, history ) => {
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
            dispatch(addProduct(response))
        })
    }
}
