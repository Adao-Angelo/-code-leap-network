import { Post } from '@/services/careers/post.interfaces';
import { useDeletePost } from './use-delete-post';

type Props = {
  post?: Post;
  onClose: () => void;
};

export function useDeletePostModal({ post, onClose }: Props) {
  const { mutate: deletePost, isPending } = useDeletePost();

  const handleDelete = () => {
    if (!post?.id) return;

    deletePost(post.id, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return {
    isPending,
    handleDelete,
  };
}
