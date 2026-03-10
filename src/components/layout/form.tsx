import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import Input from './input';
import Textarea from './textarea';

interface FormFieldProps {
  label: string;
  error?: FieldError;
  children: ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className='mb-5'>
      <label className='mb-2 block text-sm font-medium'>{label}</label>
      {children}
      {error && (
        <p className='mt-1 text-sm text-destructive'>{error.message}</p>
      )}
    </div>
  );
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  registration: UseFormRegisterReturn;
}

export function FormInput({ registration, ...props }: FormInputProps) {
  return <Input {...registration} {...props} />;
}

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  registration: UseFormRegisterReturn;
}

export function FormTextarea({ registration, ...props }: FormTextareaProps) {
  return <Textarea {...registration} {...props} />;
}
