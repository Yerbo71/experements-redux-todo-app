import React from 'react';
import {useSelector} from "react-redux";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../features/todo/todoSlice.js";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    function handleDelete(id) {
        dispatch(deleteTodo(id));
    }
    return (
        <div>
            <Navbar/>
                <div className="flex justify-center flex-wrap items-center w-full p-4 gap-2">
                {todos.map(todo => (
                        <div className="w-4/5 p-6 border rounded-lg shadow bg-gray-800 border-gray-700" key={
                            todo.id
                        }>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{todo.title}</h5>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{todo.id}</h5>
                            <p className="mb-3 font-normal text-gray-400">{todo.description}</p>
                            <p className="mb-3 font-normal text-gray-400">{todo.completed ? 'Completed' : 'Not Completed'}</p>
                            <div className="flex w-full justify-between">
                                <Link to={`todo/${todo.id}`}>
                                    <button  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                        Update
                                    </button>
                                </Link>
                                <button
                                    onClick={()=>handleDelete(todo.id)}
                                    className="inline-flex bg-red-600 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none hover:bg-red-700 focus:ring-red-800">
                                    Delete
                                </button>
                            </div>
                        </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;