import * as React from 'react';
import { JSX } from 'react/jsx-runtime';

function PencilIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width={32}
      height={30}
      viewBox='0 0 32 30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9.101 21.266l5.738-.018L27.36 9.321c.492-.472.762-1.1.762-1.767 0-.667-.27-1.295-.762-1.768L25.3 3.805c-.982-.945-2.697-.94-3.672-.004L9.1 15.73v5.537zm14.36-15.693l2.066 1.978-2.076 1.978-2.062-1.981 2.072-1.976zM11.701 16.77l7.84-7.466 2.062 1.982-7.838 7.464-2.064.006v-1.986z'
        fill='#fff'
      />
      <path
        d='M6.5 26.25h18.203c1.434 0 2.6-1.121 2.6-2.5V12.915l-2.6 2.5v8.335H10.607c-.034 0-.07.012-.103.012-.043 0-.086-.01-.13-.012H6.5V6.25h8.902l2.6-2.5H6.501c-1.434 0-2.6 1.121-2.6 2.5v17.5c0 1.379 1.166 2.5 2.6 2.5z'
        fill='#fff'
      />
    </svg>
  );
}

export default PencilIcon;
