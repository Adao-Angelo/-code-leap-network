import { render, screen } from "@testing-library/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FormTextarea } from "./form";

const mockRegistration: UseFormRegisterReturn = {
  name: "test",
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
};

describe("FormTextarea", () => {
  it("renders a Textarea with registration", () => {
    render(
      <FormTextarea registration={mockRegistration} placeholder="Write" />,
    );
    const textarea = screen.getByPlaceholderText("Write");
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("name", "test");
  });

  it("passes additional attributes to textarea", () => {
    render(
      <FormTextarea
        registration={mockRegistration}
        rows={5}
        data-testid="textarea-test"
      />,
    );
    const textarea = screen.getByTestId("textarea-test");
    expect(textarea).toHaveAttribute("rows", "5");
  });
});
