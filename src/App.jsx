import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NewTodoPage from "./pages/NewTodoPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import TodoList from "./pages/TodoList.jsx";
import UpdateTodoPage from "./pages/UpdateTodoPage.jsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/newtodo" element={<NewTodoPage/>}/>
              <Route path="/todolist" element={<TodoList/>}/>
              <Route path="/todolist/todo/:id" element={<UpdateTodoPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App
