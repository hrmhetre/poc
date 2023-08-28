import React from "react";
import { render, fireEvent } from "@testing-library/react";
import UpdateTodoForm from "./UpdateTodoForm";

describe("UpdateTodoForm", () => {
  const todo = {
    id: 1,
    title: "Sample Todo",
  };

  it("should call onUpdateTodo with correct arguments when update button is clicked", () => {
    const onUpdateTodoMock = jest.fn();
    const { getByLabelText, getByText } = render(
      <UpdateTodoForm todo={todo} onUpdateTodo={onUpdateTodoMock} />
    );

    const updateInput = getByLabelText("Update task");
    fireEvent.change(updateInput, { target: { value: "Updated Todo" } });

    const updateButton = getByText("Update Task");
    fireEvent.click(updateButton);

    expect(onUpdateTodoMock).toHaveBeenCalledWith(todo.id, "Updated Todo");
  });
  //   it("should not call onUpdateTodo if input is empty by clicking button 'Update Task'", () => {
  //     const onUpdateTodoMock = jest.fn();
  //     const { getByText } = render(
  //       <UpdateTodoForm todo={todo} onUpdateTodo={onUpdateTodoMock} />
  //     );

  //     const updateButton = getByText("Update Task");

  //     fireEvent.click(updateButton);

  //     expect(onUpdateTodoMock).not.toHaveBeenCalled();
  //   });
});
