import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PageHeader from "./page-header";

describe("PageHeader", () => {
  it("renders app name and username", () => {
    render(<PageHeader username="johndoe" onLogout={jest.fn()} />);
    expect(screen.getByText("CodeLeap Network")).toBeInTheDocument();
    expect(screen.getByText("@")).toBeInTheDocument();
    expect(screen.getByText("johndoe")).toBeInTheDocument();
  });

  it("calls onLogout when logout button is clicked", async () => {
    const onLogout = jest.fn();
    render(<PageHeader username="johndoe" onLogout={onLogout} />);
    await userEvent.click(screen.getByRole("button", { name: /logout/i }));
    expect(onLogout).toHaveBeenCalledTimes(1);
  });
});
