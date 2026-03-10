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
  return (
    <>
      <div className='flex justify-between mb-4 text-text-gray text-[1.125rem]'>
        <p>
          @<span className='font-semibold'>{username}</span>
        </p>
        <p>{createdAt}</p>
      </div>

      <div className='text-[1.125rem] whitespace-pre-line'>{content}</div>
    </>
  );
}
