import { Post } from '@/services/careers/post.interfaces';
import { PostsService } from '@/services/careers/post.service';
import { useQuery } from '@tanstack/react-query';

export function usePosts() {
  return useQuery<
    {
      count: number;
      next: string | null;
      previous: string | null;
      results: Post[];
    },
    Error
  >({
    queryKey: ['posts', 'list'],
    queryFn: PostsService.getAllPosts,
    staleTime: 1000 * 60 * 5,
  });
}
