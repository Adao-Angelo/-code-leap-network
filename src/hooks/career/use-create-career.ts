/* eslint-disable @typescript-eslint/no-explicit-any */

import { CareersService } from '@/services/careers/careers.service';

import type { CareerCreateDto } from '@/services/careers/interfaces';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

export function useCreateCareer() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CareerCreateDto) => CareersService.createCareer(data),

    onSuccess: () => {
      toast.success('Vaga criada com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['careers', 'list'] });
    },

    onError: (error: AxiosError<any>) => {
      const msg = error?.response?.data?.message || 'Erro ao criar vaga';
      toast.error(Array.isArray(msg) ? msg[0] : msg);
    },
  });
}
