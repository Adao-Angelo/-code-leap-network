import { Post } from '@/services/careers/post.interfaces';
import PostContent from './post-content';
import PostHeader from './post-header';

type PostCardProps = {
  post: Post;
  onEdit: () => void;
  onDelete: () => void;
};

export default function PostCard({ post, onEdit, onDelete }: PostCardProps) {
  return (
    <div className='rounded-2xl overflow-hidden'>
      <PostHeader title={post.title} onEdit={onEdit} onDelete={onDelete} />

      <div className='border-l border-r border-b border-border-gray rounded-bl-2xl rounded-br-2xl p-5'>
        <PostContent
          username={post.username}
          createdAt={post.created_datetime}
          content={post.content}
        />
      </div>
    </div>
  );
}
