/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({
  className,
  disabled,
  ...rest
}: TextareaProps) {
  const baseClasses = `
    px-4 py-2
    min-h-[80px]
    rounded-md
    border
    border-text-gray
    text-black
    focus:outline-none
    focus:ring-2
    focus:ring-offset-1
    focus:ring-primary
    transition-colors
    disabled:opacity-60
    disabled:cursor-not-allowed
    w-full
    placeholder:text-light-gray
    resize-y
  `;

  return (
    <textarea
      className={twMerge(baseClasses, className)}
      disabled={disabled}
      {...rest}
    />
  );
}
