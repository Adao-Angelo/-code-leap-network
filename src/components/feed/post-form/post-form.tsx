'use client';

import Button from '@/components/layout/button';
import { FormField, FormInput, FormTextarea } from '@/components/layout/form';
import Loader from '@/components/layout/loader';
import { usePostForm } from '@/hooks/post/use-post-form';

export default function PostForm() {
  const { form, onSubmit, isPending } = usePostForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className='border border-border-gray rounded-2xl p-5'>
      <h2 className='font-bold text-[1.375rem] mb-5'>
        What&apos;s on your mind?
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-1'>
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

        <div className='flex justify-end pt-4'>
          <Button type='submit' disabled={isPending}>
            {isPending ? <Loader variant='white-mini' /> : 'Create'}
          </Button>
        </div>
      </form>
    </div>
  );
}
