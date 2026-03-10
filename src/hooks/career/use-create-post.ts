/* eslint-disable @typescript-eslint/no-explicit-any */

import { PostsService } from '@/services/careers/post.service';

import type { PostCreateDto } from '@/services/careers/post.interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: PostCreateDto) => PostsService.createPost(data),

    onSuccess: () => {
      toast.success('Post Created.');
      queryClient.invalidateQueries({ queryKey: ['posts', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Erro ao criar post';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
