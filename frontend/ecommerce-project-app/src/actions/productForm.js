import {addProduct} from '../reducers/allProducts'


export const createProduct = (productData, history) => {
    return dispatch => {
      const sendableProductData = {
        title: productData.title,
        desription: productData.description,
        image: productData.image,
        price: productData.price,
        quantity: productData.quantity,
        user_id: productData.userId
      }
      //debugger
      return fetch("http://localhost:3001/api/v1/products", { 
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableProductData)
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addProduct(resp))
            history.push(`/products/${resp.data.id}`)
            // go somewhere else --> trip show?
            // add the new trip to the store
          }
        })
        .catch(console.log)
  
    }
  }
