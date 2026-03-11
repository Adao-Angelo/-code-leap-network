/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, disabled, ...rest }: InputProps) {
  const baseClasses = `
    px-4 py-2
    h-8
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
  `;

  return (
    <input
      className={twMerge(baseClasses, className)}
      disabled={disabled}
      {...rest}
    />
  );
}
