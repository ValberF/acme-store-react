import { Product } from "@/models/ProductProps.model";
import { createSlice } from "@reduxjs/toolkit";

const favorite = createSlice({
    name: 'favorite',
    initialState: {
        currentFavorites: [] as Product[],
    },
    reducers: {
        addFavorite(state, action) {
            const productIsFavorite = state.currentFavorites.some(
                product => product.id === action.payload.id
            )

            if (!productIsFavorite) {
                state.currentFavorites = [...state.currentFavorites, { ...action.payload }]
                return;
            }
        },

        removeFavorite(state, action) {
            state.currentFavorites = state.currentFavorites.filter(
                product => product.id !== action.payload
            )
        },
    }
})

export const {
    addFavorite,
    removeFavorite,
} = favorite.actions;

export default favorite.reducer;