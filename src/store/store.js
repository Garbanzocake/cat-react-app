import { configureStore } from "@reduxjs/toolkit";
import { catSlice } from "./cat";

export const store = configureStore({
    reducer:{
        cats:catSlice.reducer,
    },
})