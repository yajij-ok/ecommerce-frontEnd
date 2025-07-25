import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/user/userSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});