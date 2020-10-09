import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from './actionTypes'

export const fetchProductsBegin = () => ({
  type: FETCH_PRODUCTS_BEGIN
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

export const fetchProducts = () => {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch(`http://localhost:3001/api/v1/products`)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => { 
          dispatch(fetchProductsSuccess(json))
          return json
          
        })
        .catch(error => dispatch(fetchProductsFailure(error)));
    };
  }

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }