import { formatDistanceToNowStrict, parseISO } from 'date-fns';

type PostContentProps = {
  username: string;
  createdAt: string;
  content: string;
};

export default function PostContent({
  username,
  createdAt,
  content,
}: PostContentProps) {
  const date = parseISO(createdAt);

  const timeAgo = formatDistanceToNowStrict(date, { addSuffix: true });
  return (
    <>
      <div className='flex justify-between mb-4 text-text-gray text-[1.125rem]'>
        <p>
          @<span className='font-semibold'>{username}</span>
        </p>
        <p>{timeAgo}</p>
      </div>

      <div className='text-[1.125rem] whitespace-pre-line'>{content}</div>
    </>
  );
}
