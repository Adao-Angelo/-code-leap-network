import Button from '@/components/layout/button';
import Input from '@/components/layout/input';
import { Modal } from '@/components/layout/modal';
import Textarea from '@/components/layout/textarea';

type EditPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

export default function EditPostModal({ isOpen, onClose }: EditPostModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='rounded-2xl p-8 w-[41.25rem] max-w-[90vw]'>
        <h2 className='font-bold text-[1.375rem] mb-6'>Edit item</h2>

        <div className='mb-6'>
          <label className='mb-2 block'>Title</label>
          <Input placeholder='Hello world' defaultValue='My First Post...' />
        </div>

        <div className='mb-8'>
          <label className='mb-2 block'>Content</label>
          <Textarea
            placeholder='Content here'
            defaultValue='Learning programming can feel challenging...'
          />
        </div>

        <div className='flex justify-end gap-4'>
          <Button variant='outline' className='border-black' onClick={onClose}>
            Cancel
          </Button>
          <Button variant='success'>Save</Button>
        </div>
      </div>
    </Modal>
  );
}
