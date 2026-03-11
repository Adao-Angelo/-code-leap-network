import { Post } from "@/services/careers/post.interfaces";
import { PostsService } from "@/services/careers/post.service";
import { useInfiniteQuery } from "@tanstack/react-query";

export function usePosts(filters: { title: string; username: string }) {
  return useInfiniteQuery<
    {
      count: number;
      next: string | null;
      previous: string | null;
      results: Post[];
    },
    Error
  >({
    queryKey: ["posts", "list", filters],

    queryFn: async ({ pageParam }) => {
      const data = await PostsService.getAllPosts(pageParam as string);

      const filtered = data.results.filter((post: Post) => {
        return (
          post.title.toLowerCase().includes(filters.title.toLowerCase()) &&
          post.username.toLowerCase().includes(filters.username.toLowerCase())
        );
      });

      return {
        ...data,
        results: filtered,
      };
    },

    initialPageParam: undefined,

    getNextPageParam: (lastPage) => {
      return lastPage.next ?? undefined;
    },

    staleTime: 1000 * 60 * 5,
  });
}
