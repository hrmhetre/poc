import { render, screen } from "@testing-library/react";
import Form1 from "./Form1";

const mockAddUser = jest.fn();
jest.mock("../utils/UserContext", () => ({
  useUserContext: () => ({
    addUser: mockAddUser,
  }),
}));

import "@testing-library/jest-dom/extend-expect";

describe("Form1 Component", () => {
  beforeEach(() => {
    render(<Form1 />);
  });

  it("renders the name input field with correct label", () => {
    expect(screen.getByLabelText("Enter username")).toBeInTheDocument();
  });

  it("renders the email input field with correct label", () => {
    expect(screen.getByLabelText("Enter E-mail")).toBeInTheDocument();
  });

  // it("submits the form with valid data", () => {
  //   userEvent.type(screen.getByLabelText("Enter username"), "hrishikesh");
  //   userEvent.type(
  //     screen.getByLabelText("Enter E-mail"),
  //     "hrishikesh@hotmail.com"
  //   );

  //   userEvent.click(screen.getByText("Add User"));

  //   expect(mockAddUser).toHaveBeenCalledWith({
  //     id: 1,
  //     name: "hrishikesh",
  //     email: "hrishikesh@hotmail.com",
  //   });
  // });
});
