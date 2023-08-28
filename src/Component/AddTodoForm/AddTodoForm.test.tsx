import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import AddTodoForm from "./AddTodoForm"; // Make sure to provide the correct import path

describe("AddTodoForm", () => {
  it("should add a task when 'Add Task' button is clicked", async () => {
    const mockOnAddTodo = jest.fn();
    const { getByLabelText, getByText } = render(
      <AddTodoForm onAddTodo={mockOnAddTodo} />
    );

    const input = getByLabelText("Enter a task") as HTMLInputElement;
    const addButton = getByText("Add Task");

    const taskText = "Test task";
    fireEvent.change(input, { target: { value: taskText } });
    fireEvent.click(addButton);

    expect(mockOnAddTodo).toHaveBeenCalledWith(taskText);

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });

  it("should not add a task when input is empty and 'Add Task' button is clicked", () => {
    const mockOnAddTodo = jest.fn();
    const { getByText } = render(<AddTodoForm onAddTodo={mockOnAddTodo} />);

    const addButton = getByText("Add Task");

    fireEvent.click(addButton);

    expect(mockOnAddTodo).not.toHaveBeenCalled();
  });
});
