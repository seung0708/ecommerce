export const updateProductForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_PRODUCT_FORM",
        formData
    }
}