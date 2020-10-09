
export const fetchProducts = () => {
    return dispatch => {
     
      return fetch(`http://localhost:3001/api/v1/products`)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => { 
          dispatch({type: "GET_ALL_PRODUCTS", products: json})
          
        })
        .catch(error => console.log(error));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const fetchProduct = product_id => {
    return dispatch => { 
      return fetch(`http://localhost:3001/api/v1/${product_id}`)
      .then(response => response.json())
      .then(json => {
        dispatch()
      })

    }
  }

