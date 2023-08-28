import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

interface AddTodoFormProps {
  onAddTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [task, setTask] = useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      onAddTodo(task);
      setTask("");
    }
  };

  return (
    <div className="">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="60vh"
      >
        {" "}
        {/* Center content */}
        <div>
          <h2>Add Todo</h2>
          <TextField
            label="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            variant="outlined"
            fullWidth
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginLeft: "20px",
            marginTop: "90px",
          }}
          onClick={handleAddTodo}
        >
          Add Task
        </Button>
      </Box>
    </div>
  );
};

export default AddTodoForm;
