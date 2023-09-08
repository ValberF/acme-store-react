import { Product } from "@/models/ProductProps.model";
import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: {
        currentCart: [] as Product[],
    },
    reducers: {
        addProduct(state, action) {
            const productIsAlreadyInCart = state.currentCart.some(
                product => product.id === action.payload.id
            )

            if (productIsAlreadyInCart) {
                state.currentCart = state.currentCart.map(
                    product => product.id === action.payload.id
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )

                return;
            }

            state.currentCart = [...state.currentCart, { ...action.payload, quantity: 1 }]
        },

        increaseProductQuantity(state, action) {
            state.currentCart = state.currentCart.map(
                product => product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        },

        decreaseProductQuantity(state, action) {
            state.currentCart = state.currentCart.map(
                product => product.id === action.payload
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            ).filter(product => product.quantity > 0)
        },

        removeProductofCart(state, action) {
            state.currentCart = state.currentCart.filter(
                product => product.id !== action.payload
            )
        },

        clearCart(state) {
            state.currentCart = []
        }
    }
})

export const {
    addProduct,
    removeProductofCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    clearCart
} = cart.actions;

export default cart.reducer;