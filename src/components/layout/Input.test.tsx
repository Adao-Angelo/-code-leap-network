import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./input";

describe("Input", () => {
  it("renders input with base classes", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("px-4", "py-2", "h-8", "rounded-md", "border");
  });

  it("merges custom className", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("disables input when disabled is true", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("handles onChange event", async () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    await userEvent.type(screen.getByRole("textbox"), "test");
    expect(handleChange).toHaveBeenCalled();
  });
});
