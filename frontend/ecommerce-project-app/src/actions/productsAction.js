import { getAllProducts } from '../reducer/productReducer'

export const allProducts = () => {
    return (dispatch) => {
        return fetch("http://localhost:3001/api/v1/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
          .then(response => response.json())
          .then(response => { 
            if (response.error) {
                alert(response.error)
            }
            else { 
            dispatch(getAllProducts(response.data))
            }
          });
    };
} 