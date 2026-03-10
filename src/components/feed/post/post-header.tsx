import PencilIcon from '@/components/icons/pencil';
import TrashIcon from '@/components/icons/trash';

type PostHeaderProps = {
  title: string;
  onEdit: () => void;
  onDelete: () => void;
};

export default function PostHeader({
  title,
  onEdit,
  onDelete,
}: PostHeaderProps) {
  return (
    <div className='bg-primary px-8 py-6 flex justify-between items-center'>
      <h2 className='font-bold text-[1.375rem] text-white'>{title}</h2>
      <div className='flex items-center gap-6'>
        <button onClick={onDelete} aria-label='Delete post'>
          <TrashIcon />
        </button>
        <button onClick={onEdit} aria-label='Edit post'>
          <PencilIcon />
        </button>
      </div>
    </div>
  );
}
