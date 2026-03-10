/* eslint-disable @typescript-eslint/no-explicit-any */

import type { PostUpdateDto } from '@/services/careers/post.interfaces';
import { PostsService } from '@/services/careers/post.service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useUpdatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: PostUpdateDto }) =>
      PostsService.updatePost(id, data),

    onSuccess: () => {
      toast.success('Post updated');
      queryClient.invalidateQueries({ queryKey: ['posts', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Erro ao atualizar post';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
