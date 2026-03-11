import { ReactNode } from "react";

export interface IModal {
  modalState: boolean;
  closeModal: () => void;
  children: ReactNode;
  showClosedButton?: boolean;
  className?: string;
  disableOutsideClick?: boolean;
  onOutsideClick?: () => void;
}
