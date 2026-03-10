/* eslint-disable @typescript-eslint/no-explicit-any */

import { CareersService } from '@/services/careers/careers.service';
import type { CareerUpdateDto } from '@/services/careers/interfaces';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useUpdateCareer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: CareerUpdateDto }) =>
      CareersService.updateCareer(id, data),

    onSuccess: () => {
      toast.success('Vaga atualizada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['careers', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Erro ao atualizar vaga';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
