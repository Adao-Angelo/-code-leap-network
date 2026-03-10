import { twMerge } from 'tailwind-merge';
import Button from '../../button';

import { IModalContent } from './interface';

export const ModalContent = ({
  abortAction,
  confirmAction,
  confirmContent,
  title,
  abortClassName,
  className,
  confirmClassName,
  abortContent,
}: IModalContent) => (
  <div
    className={twMerge(
      'flex flex-col gap-6 w-full max-w-[41.25rem] bg-white rounded-2xl p-5',
      className
    )}
  >
    <div className='flex flex-col items-center gap-2'>
      <h3 className='font-bold text-[1.375rem] text-white'>{title}</h3>
    </div>

    <div className='flex justify-between gap-4 w-full'>
      <Button className={abortClassName} onClick={abortAction}>
        {abortContent}
      </Button>
      <Button className={confirmClassName} onClick={confirmAction}>
        {confirmContent}
      </Button>
    </div>
  </div>
);
