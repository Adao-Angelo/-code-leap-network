/* eslint-disable @typescript-eslint/no-explicit-any */
import { CareersService } from '@/services/careers/careers.service';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useDeleteCareer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => CareersService.deleteCareer(id),

    onSuccess: () => {
      toast.success('Vaga removida com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['careers', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Erro ao remover vaga';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
