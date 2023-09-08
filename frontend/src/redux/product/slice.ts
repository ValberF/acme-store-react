import { Product } from "@/models/ProductProps.model";
import { createSlice } from "@reduxjs/toolkit";

const product = createSlice({
    name: 'product',
    initialState: {
        currentProduct: {
            id: -1,
            name: '',
            price: 0,
            photo: '',
            description: '',
            quantity: 0,
        } as Product,
    },
    reducers: {
        setProduct(state, action) {
            state.currentProduct = action.payload
        },

        removeProduct(state) {
            state.currentProduct = {
                id: -1,
                name: '',
                price: 0,
                photo: '',
                description: '',
                quantity: 0,
            }
        }
    }
})

export const { setProduct, removeProduct } = product.actions;
export default product.reducer;