import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Todo } from "./App";

interface UpdateTodoFormProps {
  todo: Todo;
  onUpdateTodo: (id: number, newText: string) => void;
}

const UpdateTodoForm: React.FC<UpdateTodoFormProps> = ({
  todo,
  onUpdateTodo,
}) => {
  const [text, setText] = useState(todo.title);

  const handleUpdate = () => {
    onUpdateTodo(todo.id, text);
  };

  return (
    <div>
      <TextField
        label="Update task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginLeft: "250px",
          marginTop: "20px",
        }}
        onClick={handleUpdate}
      >
        Update Task
      </Button>
    </div>
  );
};

export default UpdateTodoForm;
