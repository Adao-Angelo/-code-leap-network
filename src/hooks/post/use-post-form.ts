import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { useCreatePost } from '@/hooks/post/use-create-post';
import {
  CreatePostFormData,
  createPostSchema,
} from '@/schemas/post/post.schema';
import { useAuthStore } from '@/store/use-auth.store';

export function usePostForm() {
  const { username } = useAuthStore();
  const { mutate: createPost, isPending } = useCreatePost();

  const form = useForm<CreatePostFormData>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const { reset } = form;

  const onSubmit = (data: CreatePostFormData) => {
    createPost(
      {
        title: data.title,
        content: data.content,
        username,
      },
      {
        onSuccess: () => {
          reset();
          toast.success('Post created successfully!');
        },
      }
    );
  };

  return {
    form,
    onSubmit,
    isPending,
  };
}
