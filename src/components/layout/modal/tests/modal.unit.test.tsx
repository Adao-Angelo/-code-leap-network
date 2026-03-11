import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "..";

describe("Modal", () => {
  const onCloseMock = jest.fn();
  const onOutsideClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });

  it("renders when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies className to content", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} className="custom-modal">
        <div>Content</div>
      </Modal>,
    );
    const modalContent = screen.getByText("Content").parentElement;
    expect(modalContent).toHaveClass("custom-modal");
  });

  it("calls onClose when clicking on backdrop", async () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );
    const backdrop = document.querySelector(".bg-text-gray\\/70");
    expect(backdrop).toBeInTheDocument();
    await userEvent.click(backdrop!);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when disableOutsideClick is true but calls onOutsideClick", async () => {
    render(
      <Modal
        isOpen={true}
        onClose={onCloseMock}
        disableOutsideClick
        onOutsideClick={onOutsideClickMock}
      >
        <div>Content</div>
      </Modal>,
    );
    const backdrop = document.querySelector(".bg-text-gray\\/70");
    await userEvent.click(backdrop!);
    expect(onCloseMock).not.toHaveBeenCalled();
    expect(onOutsideClickMock).toHaveBeenCalledTimes(1);
  });

  it("shows close button when showCloseButton is true", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} showCloseButton>
        <div>Content</div>
      </Modal>,
    );
    expect(screen.getByLabelText("Close modal")).toBeInTheDocument();
  });

  it("calls onClose when clicking close button", async () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} showCloseButton>
        <div>Content</div>
      </Modal>,
    );
    await userEvent.click(screen.getByLabelText("Close modal"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("blocks body scroll when open", () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("restores body scroll on close", async () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );
    expect(document.body.style.overflow).toBe("hidden");

    rerender(
      <Modal isOpen={false} onClose={onCloseMock}>
        <div>Content</div>
      </Modal>,
    );

    await waitFor(() => {
      expect(document.body.style.overflow).toBe("");
    });
  });
});
