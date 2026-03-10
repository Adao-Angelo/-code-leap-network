import { CareersService } from '@/services/careers/careers.service';
import { Career } from '@/services/careers/interfaces';
import { useQuery } from '@tanstack/react-query';

export function useCareers() {
  return useQuery<
    {
      count: number;
      next: string | null;
      previous: string | null;
      results: Career[];
    },
    Error
  >({
    queryKey: ['careers', 'list'],
    queryFn: CareersService.getAllCareers,
    staleTime: 1000 * 60 * 5,
  });
}
