import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'danger' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const baseClasses = `
    px-5 py-1.5
    rounded-lg
    font-medium
    min-w-[7.5rem]
    transition-colors
    focus:outline-none
    focus:ring-1
    focus:ring-offset-1
    disabled:opacity-60
    disabled:cursor-not-allowed
    font-bold
  
  `;

  const variantClasses: Record<ButtonVariant, string> = {
    primary: `
      bg-primary
      text-white
      hover:bg-primary/90
      focus:bg-primary
    `,
    danger: `
      bg-destructive
      text-white
      hover:bg-destructive/90
      focus:destructive
    `,
    outline: `
      border border-border-gray
      text-black
      hover:bg-border-gray/90
      focus:ring-border-gray
    `,
  };

  return (
    <button
      className={twMerge(baseClasses, variantClasses[variant], className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
