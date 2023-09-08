import { User } from "@/models/UserProps.model";
import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: {
        currentUser: { email: "", password: "" } as User,
    },
    reducers: {
        login(state, action) {
            state.currentUser = action.payload
        },

        logout(state) {
            state.currentUser = { email: "", password: "" }
        }
    }
})

export const { login, logout } = user.actions;
export default user.reducer;