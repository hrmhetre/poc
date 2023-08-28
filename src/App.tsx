import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import ShowTodoForm from "./ShowTodoForm";
import ListTodoForm from "./ListTodoForm";

export interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text };
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleUpdateTodo = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
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
            path="list/add"
            element={<AddTodoForm onAddTodo={handleAddTodo} />}
          />
          <Route path="/list" element={<ListTodoForm todos={todos} />} />
          <Route
            path="list/delete"
            element={<TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />}
          />
          <Route
            path="list/update"
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
