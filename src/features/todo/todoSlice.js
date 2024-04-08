import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {
            id:1,
            title: 'Learn Redux',
            description: 'The store, actions, and reducers of Redux.',
            completed: false
        }
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo);
        }
    },
});

export const { addTodo,deleteTodo,updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
