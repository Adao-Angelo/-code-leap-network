'use client';

import Button from '@/components/layout/button';
import { FormField, FormInput, FormTextarea } from '@/components/layout/form';
import Loader from '@/components/layout/loader';
import { Modal } from '@/components/layout/modal';

import { useEditPostModal } from '@/hooks/post/use-edit-post-modal';
import { Post } from '@/services/careers/post.interfaces';

type EditPostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  post?: Post;
};

export default function EditPostModal({
  isOpen,
  onClose,
  post,
}: EditPostModalProps) {
  const { register, handleSubmit, formState, onSubmit, isPending } =
    useEditPostModal({
      post,
      isOpen,
      onClose,
    });

  const { errors } = formState;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='rounded-2xl p-8 w-[41.25rem] max-w-[90vw]'>
        <h2 className='font-bold text-[1.375rem] mb-6'>Edit item</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <FormField label='Title' error={errors.title}>
            <FormInput
              id='title'
              placeholder='Hello world'
              registration={register('title')}
            />
          </FormField>

          <FormField label='Content' error={errors.content}>
            <FormTextarea
              id='content'
              placeholder='Write your content here...'
              registration={register('content')}
              rows={5}
            />
          </FormField>

          <div className='flex justify-end gap-4 pt-4'>
            <Button
              type='button'
              variant='outline'
              onClick={onClose}
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button type='submit' variant='success' disabled={isPending}>
              {isPending ? <Loader variant='white-mini' /> : 'Save'}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
