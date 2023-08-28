import React from "react";
import { Todo } from "./App";
import TodoList from "./TodoList";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import UpdateTodoForm from "./UpdateTodoForm";
import Grid from "@mui/material/Grid";

interface ShowTodoFormProps {
  todos: Todo[];
  onUpdateTodo: (id: number, newText: string) => void;
}

const ShowTodoForm: React.FC<ShowTodoFormProps> = ({ todos, onUpdateTodo }) => {
  return (
    <div>
      {/* <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <UpdateTodoForm todo={todo} onUpdateTodo={onUpdateTodo} />{" "}
          </ListItem>
        ))}
      </List> */}
      <Grid container spacing={4}>
        {/* Add a Grid container */}
        {todos.map((todo) => (
          <Grid item xs={12} md={6} lg={4} key={todo.id}>
            {/* Adjust columns based on your layout */}
            <ListItem>
              <ListItemText primary={todo.text} />
            </ListItem>
            <ListItem>
              <UpdateTodoForm todo={todo} onUpdateTodo={onUpdateTodo} />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ShowTodoForm;
