import { render, screen } from "@testing-library/react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FormInput } from "./form";

const mockRegistration: UseFormRegisterReturn = {
  name: "test",
  onChange: jest.fn(),
  onBlur: jest.fn(),
  ref: jest.fn(),
};

describe("FormInput", () => {
  it("renders an Input with registration and other props", () => {
    render(<FormInput registration={mockRegistration} placeholder="Type" />);
    const input = screen.getByPlaceholderText("Type");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "test");
  });

  it("passes additional attributes to input", () => {
    render(
      <FormInput
        registration={mockRegistration}
        type="password"
        data-testid="input-test"
      />,
    );
    const input = screen.getByTestId("input-test");
    expect(input).toHaveAttribute("type", "password");
  });
});
