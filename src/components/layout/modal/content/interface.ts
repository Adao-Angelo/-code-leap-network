export interface IModalContent {
  abortAction: () => void;
  confirmAction: () => void;

  className?: string;
  title: string;
  description: string;

  abortContent: string;
  confirmContent: string;

  abortClassName?: string;
  confirmClassName?: string;
}
