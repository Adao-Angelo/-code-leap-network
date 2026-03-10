/* eslint-disable @typescript-eslint/no-explicit-any */

import { PostsService } from '@/services/careers/post.service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => PostsService.deletePost(id),

    onSuccess: () => {
      toast.success('Post deleted successfully!');
      queryClient.invalidateQueries({ queryKey: ['posts', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Failed to delete post';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
