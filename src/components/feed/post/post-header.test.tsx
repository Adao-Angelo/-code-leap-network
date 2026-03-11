import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostHeader from "./post-header";

describe("PostHeader", () => {
  it("shows action buttons when canModify is true", async () => {
    const onEdit = jest.fn();
    const onDelete = jest.fn();

    render(
      <PostHeader
        title="Post title"
        onEdit={onEdit}
        onDelete={onDelete}
        canModify={true}
      />,
    );

    expect(
      screen.getByRole("button", { name: /edit post/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /delete post/i }),
    ).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /edit post/i }));
    await userEvent.click(screen.getByRole("button", { name: /delete post/i }));

    expect(onEdit).toHaveBeenCalledTimes(1);
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("shows info text when canModify is false", () => {
    render(
      <PostHeader
        title="Post title"
        onEdit={jest.fn()}
        onDelete={jest.fn()}
        canModify={false}
      />,
    );

    expect(screen.getByText(/owner only/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /edit post/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /delete post/i })).toBeNull();
  });
});
