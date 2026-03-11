import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
  className?: string;
  disableOutsideClick?: boolean;
  onOutsideClick?: () => void;
}

export function Modal({
  children,
  isOpen,
  onClose,
  showCloseButton = false,
  className = "",
  disableOutsideClick = false,
  onOutsideClick,
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  const handleBackdropClick = () => {
    if (disableOutsideClick) {
      onOutsideClick?.();
      return;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-text-gray/70 animate-modal-backdrop"
        onClick={handleBackdropClick}
      />

      <div
        className={twMerge(
          "relative bg-white rounded-2xl shadow-xl max-w-[41.25rem] w-full",
          "animate-modal-enter",
          className,
        )}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 rounded-full p-2 text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        )}

        {children}
      </div>
    </div>
  );
}
