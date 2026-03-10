import { useAuthStore } from '@/store/use-auth.store';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export function useLogin() {
  const router = useRouter();
  const { login } = useAuthStore();

  const performLogin = useCallback(
    (username: string) => {
      if (!username.trim()) {
        toast.error('Please Enter your username');
        return;
      }

      login(username.trim());

      document.cookie = `username=${username.trim()}; path=/; max-age=${60 * 60 * 24 * 7}`;

      toast.success('welcome.');

      const params = new URLSearchParams(window.location.search);
      const redirect = params.get('redirect') || '/';
      router.replace(redirect);
    },
    [login, router]
  );

  return { login: performLogin };
}
