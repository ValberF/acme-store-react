import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cart/slice";
import productReducer from "./product/slice";
import userReducer from "./user/slice";
import favoriteReducer from "./favorite/slice"

const store = configureStore({
    reducer: {
        userReducer,
        productReducer,
        cartReducer,
        favoriteReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export default store;