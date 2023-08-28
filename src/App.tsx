import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddTodoForm from "./Component/AddTodoForm/AddTodoForm";
import TodoList from "./Component/DeleteTodo/TodoList";
import ShowTodoForm from "./Component/Showtodo/ShowTodoForm";
import ListTodoForm from "./Component/Listtodo/ListTodoForm";
import axios from "axios";
import { ADD, DELETE, SHOW_TODO, UPDATE } from "./Utils/Constant";
import UpdateTodoForm from "./Component/UpdateTodo/UpdateTodoForm";

export interface Todo {
  id: number;
  title: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async (title: string) => {
    const newTodo: Todo = { id: Date.now(), title };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = async (id: number, newTitle: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul className="horizontal-list">
            <li>
              <Link className="link" to="list/add">
                Add Todo
              </Link>
            </li>
            <li>
              <Link className="link" to="list/delete">
                Delete Todo
              </Link>
            </li>
            <li>
              <Link className="link" to="/list">
                List Todos
              </Link>
            </li>
            <li>
              <Link className="link" to="list/update">
                Update Todos
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path={ADD}
            element={<AddTodoForm onAddTodo={handleAddTodo} />}
          />
          <Route path={SHOW_TODO} element={<ListTodoForm todos={todos} />} />
          <Route
            path={DELETE}
            element={<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />}
          />
          <Route
            path={UPDATE}
            element={
              <ShowTodoForm todos={todos} onUpdateTodo={handleUpdateTodo} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
