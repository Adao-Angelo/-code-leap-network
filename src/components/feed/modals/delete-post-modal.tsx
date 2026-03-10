import Button from '@/components/layout/button';
import { Modal } from '@/components/layout/modal';

type DeletePostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

export default function DeletePostModal({
  isOpen,
  onClose,
  onConfirm,
}: DeletePostModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='rounded-2xl p-8 w-[41.25rem] max-w-[90vw]'>
        <h2 className='font-bold text-[1.375rem] mb-10'>
          Are you sure you want to delete this item?
        </h2>

        <div className='flex justify-end gap-4'>
          <Button variant='outline' onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant='danger'>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
