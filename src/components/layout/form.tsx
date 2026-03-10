import React from 'react';
import Input from './input';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export default function InputField({
  label,
  errorMessage,
  id,
  ...rest
}: InputFieldProps) {
  return (
    <div className='mb-4'>
      {label && (
        <label className='mb-2 block' htmlFor={id}>
          {label}
        </label>
      )}
      <Input id={id} {...rest} />
      {errorMessage && (
        <p className='text-destructive text-xs mt-1'>{errorMessage}</p>
      )}
    </div>
  );
}
