import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  CreatePostFormData,
  createPostSchema,
} from '@/schemas/post/post.schema';

import { Post } from '@/services/careers/post.interfaces';
import { useUpdatePost } from './use-update-post';

type Props = {
  post?: Post;
  isOpen: boolean;
  onClose: () => void;
};

export function useEditPostModal({ post, isOpen, onClose }: Props) {
  const { mutate: updatePost, isPending } = useUpdatePost();

  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const { reset, setValue } = form;

  useEffect(() => {
    if (post && isOpen) {
      setValue('title', post.title);
      setValue('content', post.content);
    }
  }, [post, isOpen, setValue]);

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = (data: CreatePostFormData) => {
    if (!post?.id) return;

    updatePost(
      {
        id: post.id,
        data,
      },
      {
        onSuccess: () => {
          onClose();
        },
      }
    );
  };

  return {
    ...form,
    onSubmit,
    isPending,
  };
}
