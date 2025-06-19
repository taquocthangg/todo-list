import { configureStore } from '@reduxjs/toolkit';
import todoSlice from "./slice/todoSlice.js";

export const store = configureStore({
    reducer: {
        todos: todoSlice,
    },
});
