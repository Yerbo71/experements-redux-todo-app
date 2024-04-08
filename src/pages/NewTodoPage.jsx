import React, { useState } from 'react';
import {addTodo} from "../features/todo/todoSlice.js";
import {useDispatch} from "react-redux";
import Navbar from "../components/Navbar.jsx";

const NewTodoPage = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        id: Date.now(),
        title: "",
        description: "",
        completed: false,
    });

    function handleOnChange(e) {
        const { name, value, type, checked } = e.target;
        setData({
            ...data,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addTodo(data));
        console.log(data);
        setData({
            id: Date.now(),
            title: "",
            description: "",
            completed: false,
        })
    }

    return (
        <div >
            <Navbar/>
            <div className="flex items-center justify-center w-full h-screen ">
                <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-white">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={data.title}
                            onChange={handleOnChange}
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="BlaBla" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={handleOnChange}
                            placeholder="BlaBlaDlvdsvdsv"
                            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" required />
                    </div>
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input
                                id="completed"
                                name="completed"
                                type="checkbox"
                                checked={data.completed}
                                onChange={handleOnChange}
                                className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"/>
                        </div>
                        <label htmlFor="completed" className="ms-2 text-sm font-medium text-gray-300">Completed</label>
                    </div>
                    <button type="submit" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewTodoPage;
