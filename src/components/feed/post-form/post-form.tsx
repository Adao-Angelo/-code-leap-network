'use client';

import Button from '@/components/layout/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { FormField, FormInput, FormTextarea } from '@/components/layout/form';
import Loader from '@/components/layout/loader';
import { useCreatePost } from '@/hooks/career/use-create-post';
import {
  CreatePostFormData,
  createPostSchema,
} from '@/schemas/post/post.schema';
import { useAuthStore } from '@/store/use-auth.store';

export default function PostForm() {
  const { mutate: createPost, isPending } = useCreatePost();
  const { username } = useAuthStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: CreatePostFormData) => {
    createPost(
      {
        title: data.title,
        content: data.content,
        username: username,
      },
      {
        onSuccess: () => {
          reset();
          toast.success('Post created successfully!');
        },
      }
    );
  };

  return (
    <div className='border border-border-gray rounded-2xl p-5'>
      <h2 className='font-bold text-[1.375rem] mb-5'>
        What&#39;s on your mind?
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
