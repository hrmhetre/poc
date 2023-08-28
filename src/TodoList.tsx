import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { Todo } from "./App";
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
    // <List>
    //   {todos.map((todo) => (
    //     <ListItem key={todo.id}>
    //       <ListItemText primary={todo.text} />
    //       <Button
    //         variant="outlined"
    //         color="secondary"
    //         startIcon={<DeleteIcon />}
    //         onClick={() => handleDelete(todo.id)}
    //       >
    //         Delete
    //       </Button>
    //     </ListItem>
    //   ))}
    // </List>

    <Grid container spacing={4}>
      {/* Add a Grid container */}
      {todos.map((todo) => (
        <Grid item xs={12} md={12} lg={4} key={todo.id}>
          {/* Adjust columns based on your layout */}
          <ListItem>
            <ListItemText primary={todo.text} />
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
