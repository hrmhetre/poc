import React from "react";
import { Todo } from "../../App";
import { List, ListItem, ListItemText } from "@mui/material";

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
    </div>
  );
};

export default ListTodoForm;
