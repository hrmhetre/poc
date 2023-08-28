import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList"; // Make sure to provide the correct import path
import { Todo } from "../../App"; // Import Todo type from the correct path

describe("TodoList", () => {
  const mockTodos: Todo[] = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ];

  it("should render todo items correctly", () => {
    const onDeleteTodo = jest.fn();
    const { getByText } = render(
      <TodoList todos={mockTodos} onDeleteTodo={onDeleteTodo} />
    );

    mockTodos.forEach((todo) => {
      const todoItem = getByText(todo.title);
      expect(todoItem).toBeInTheDocument();
    });
  });

  it("should call onDeleteTodo when 'Mark As Complete' button is clicked", () => {
    const onDeleteTodo = jest.fn();
    const { getAllByText } = render(
      <TodoList todos={mockTodos} onDeleteTodo={onDeleteTodo} />
    );

    const completeButtons = getAllByText("Mark As Complete");

    completeButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(onDeleteTodo).toHaveBeenCalledWith(mockTodos[index].id);
    });
  });
});
