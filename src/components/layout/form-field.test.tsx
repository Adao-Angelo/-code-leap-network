import { render, screen } from "@testing-library/react";
import { FormField } from "./form";

describe("FormField", () => {
  it("renders label and children", () => {
    render(
      <FormField label="Name">
        <input type="text" />
      </FormField>,
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("displays error message when error is provided", () => {
    const error = { message: "Required field", type: "required" };
    render(
      <FormField label="Email" error={error}>
        <input />
      </FormField>,
    );
    expect(screen.getByText("Required field")).toBeInTheDocument();
    expect(screen.getByText("Required field")).toHaveClass("text-destructive");
  });

  it("does not show error when error is undefined", () => {
    render(
      <FormField label="Email">
        <input />
      </FormField>,
    );
    expect(screen.queryByText(/Required/)).not.toBeInTheDocument();
  });

  it("applies custom className to container", () => {
    const { container } = render(
      <FormField label="Test" className="my-class">
        <input />
      </FormField>,
    );
    expect(container.firstChild).toHaveClass("my-class");
  });
});
