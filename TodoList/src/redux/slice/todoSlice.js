import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list: [
        {
            id: 1,
            text: 'Js',
        },
        {
            id: 2,
            text: 'Ts',
        }
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log('ADD_TODO action:', action);
            state.list.push({ id: Date.now(), text: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const todo = state.list.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
