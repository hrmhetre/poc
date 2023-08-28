import { render } from "@testing-library/react";
import ListTodoForm from "./ListTodoForm"; // Make sure to provide the correct import path
import { Todo } from "../../App"; // Import Todo type from the correct path

describe("ListTodoForm", () => {
  const mockTodos: Todo[] = [
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
    { id: 3, title: "Task 3" },
  ];

  it("should render todos correctly", () => {
    const { getByText } = render(<ListTodoForm todos={mockTodos} />);

    mockTodos.forEach((todo) => {
      const todoItem = getByText(todo.title);
      expect(todoItem).toBeInTheDocument();
    });
  });

  it("should render correct number of todos", () => {
    const { getAllByRole } = render(<ListTodoForm todos={mockTodos} />);

    const todoItems = getAllByRole("listitem");
    expect(todoItems).toHaveLength(mockTodos.length);
  });
});
