import React from "react";
import { Todo } from "./App";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface ListTodoFormProps {
  todos: Todo[];
}

const ListTodoForm: React.FC<ListTodoFormProps> = ({ todos }) => {
  return (
    <div>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} />
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary">
        <Link to="/list/update">Update Todos</Link>
      </Button>
    </div>
  );
};

export default ListTodoForm;
