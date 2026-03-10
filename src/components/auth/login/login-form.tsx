'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Button from '@/components/layout/button';

import { FormField, FormInput } from '@/components/layout/form';
import { useLogin } from '@/hooks/auth/use-login';
import { LoginData, loginSchema } from '@/schemas/auth/login-schema';

export default function LoginForm() {
  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '' },
  });

  const onSubmit = (data: LoginData) => {
    login(data.username);
  };

  return (
    <div className='border border-light-gray p-6 rounded-2xl bg-white min-w-[31.25rem]'>
      <h1 className='font-bold text-[1.375rem]'>
        Welcome to CodeLeap network!
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
        <div className='mb-6'>
          <FormField label='Please enter your username' error={errors.username}>
            <FormInput
              id='username'
              placeholder='John Doe'
              registration={register('username')}
            />
          </FormField>
        </div>

        <div className='flex justify-end'>
          <Button type='submit' disabled={isSubmitting}>
            ENTER
          </Button>
        </div>
      </form>
    </div>
  );
}
