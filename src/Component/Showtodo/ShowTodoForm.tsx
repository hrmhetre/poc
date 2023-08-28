import React from "react";
import { Todo } from "../../App";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import UpdateTodoForm from "../UpdateTodo/UpdateTodoForm";
import Grid from "@mui/material/Grid";

interface ShowTodoFormProps {
  todos: Todo[];
  onUpdateTodo: (id: number, newText: string) => void;
}

const ShowTodoForm: React.FC<ShowTodoFormProps> = ({ todos, onUpdateTodo }) => {
  return (
    <div>
      <Grid container spacing={4}>
        {todos.map((todo) => (
          <Grid item xs={12} md={6} lg={4} key={todo.id}>
            <ListItem>
              <ListItemText primary={todo.title} />
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
