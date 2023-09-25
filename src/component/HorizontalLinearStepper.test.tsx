import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import HorizontalNonLinearStepper from "./HorizontalLinearStepper";
const mockAddUser = jest.fn();
jest.mock("../utils/UserContext", () => ({
  useUserContext: () => ({
    addUser: mockAddUser,
  }),
}));
describe("HorizontalNonLinearStepper Component", () => {
  beforeEach(() => {
    render(<HorizontalNonLinearStepper />);
  });
  it("allows reset of the stepper", () => {
    userEvent.click(screen.getByText("Complete Step"));
    userEvent.click(screen.getByText("Complete Step"));
    userEvent.click(screen.getByText("Complete Step"));
    userEvent.click(screen.getByText("RESTART"));
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });
  it("renders the first step correctly", () => {
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeDisabled();
    expect(screen.getByText("Complete Step")).toBeInTheDocument();
  });

  it("allows navigation to the next step", () => {
    userEvent.click(screen.getByText("Complete Step"));

    expect(screen.getByText("Details")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Complete Step")).toBeInTheDocument();
  });
});
