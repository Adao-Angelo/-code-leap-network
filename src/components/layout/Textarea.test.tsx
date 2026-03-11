import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "./textarea";

describe("Textarea", () => {
  it("renders textarea with base classes", () => {
    render(<Textarea placeholder="Enter text" />);
    const textarea = screen.getByPlaceholderText("Enter text");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveClass(
      "px-4",
      "py-2",
      "min-h-[80px]",
      "rounded-md",
      "border",
    );
  });

  it("merges custom className", () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("disables textarea when disabled is true", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("handles change event", async () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} />);
    await userEvent.type(screen.getByRole("textbox"), "test");
    expect(handleChange).toHaveBeenCalled();
  });
});
