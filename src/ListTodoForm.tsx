import React from "react";
import { Todo } from "./App";
import TodoList from "./TodoList";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import UpdateTodoForm from "./UpdateTodoForm";

interface ListTodoFormProps {
  todos: Todo[];
}

const ListTodoForm: React.FC<ListTodoFormProps> = ({ todos }) => {
  return (
    <div>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListTodoForm;
