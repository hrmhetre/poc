import { render, screen } from "@testing-library/react";
import Form2 from "./Form2";

const mockAddUser = jest.fn();
jest.mock("../utils/UserContext", () => ({
  useUserContext: () => ({
    addUser: mockAddUser,
  }),
}));

import "@testing-library/jest-dom/extend-expect";
describe("Form2 Component", () => {
  beforeEach(() => {
    render(<Form2 />);
  });

  it("renders the name input field with correct label", () => {
    expect(screen.getByLabelText("Enter Address")).toBeInTheDocument();
  });

  it("renders the email input field with correct label", () => {
    expect(screen.getByLabelText("Enter Phone-Number")).toBeInTheDocument();
  });

  it("renders the email input field with correct label", () => {
    expect(screen.getByLabelText("Enter Your Designation")).toBeInTheDocument();
  });
});
