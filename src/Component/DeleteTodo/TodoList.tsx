import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "../../App";
import { Grid } from "@mui/material";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  const handleDelete = (id: number) => {
    onDeleteTodo(id);
  };

  return (
    <Grid container spacing={4}>
      {todos.map((todo) => (
        <Grid item xs={12} md={12} lg={4} key={todo.id}>
          <ListItem>
            <ListItemText primary={todo.title} />
          </ListItem>
          <ListItem>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(todo.id)}
            >
              Mark As Complete
            </Button>
          </ListItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
