import { render, screen } from "@testing-library/react";
import Loader from ".";

describe("Loader", () => {
  it('renders default variant with role="status"', () => {
    render(<Loader />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("spinner");
    expect(loader).toHaveAttribute("aria-label", "Loading...");
  });

  it('applies mini-spinner class for variant="mini"', () => {
    render(<Loader variant="mini" />);
    expect(screen.getByRole("status")).toHaveClass("mini-spinner");
  });

  it('applies white-mini-spinner class for variant="white-mini"', () => {
    render(<Loader variant="white-mini" />);
    expect(screen.getByRole("status")).toHaveClass("white-mini-spinner");
  });

  it("merges custom className", () => {
    render(<Loader className="custom-loader" />);
    expect(screen.getByRole("status")).toHaveClass("custom-loader");
  });
});
