const initialState = {
    title: "",
    description: "",
    image: "",
    price: "" 
  }

  
  export default (state= initialState, action) => {
      switch(action.types) {
          case "UPDATE_PRODUCT": 
          const returnVal = {
            ...state,
            [action.formData.name]: action.formData.value
          }
          return returnVal
          default: 
             return state
      }
  } 