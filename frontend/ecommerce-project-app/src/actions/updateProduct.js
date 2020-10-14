export const updateProduct = (name, value) => {
    const formData = { name, value }
    return {
      type: "UPDATE_PRODUCT",
      formData
    }
  }
   