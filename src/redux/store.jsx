import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// This code configures a Redux store using Redux Toolkit, with a "cart" slice provided by the cartSlice reducer, and enables Redux DevTools for debugging.

export const store = configureStore({
    reducer :{
        cart : cartSlice
    },
    devTools : true
})