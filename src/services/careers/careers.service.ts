import { API } from '@/services/api';
import { Career, CareerCreateDto, CareerUpdateDto } from './interfaces';

async function createCareer(data: CareerCreateDto): Promise<Career> {
  const response = await API.post('/careers', data);
  return response.data;
}

async function getAllCareers(): Promise<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Career[];
}> {
  const response = await API.get('/careers');
  return response.data;
}

async function getCareer(id: number): Promise<Career> {
  const response = await API.get(`/careers/${id}`);
  return response.data;
}

async function updateCareer(
  id: number,
  data: CareerUpdateDto
): Promise<Career> {
  const response = await API.patch(`/careers/${id}`, data);
  return response.data;
}

async function deleteCareer(id: number): Promise<void> {
  await API.delete(`/careers/${id}`);
}

export const CareersService = {
  createCareer,
  getAllCareers,
  getCareer,
  updateCareer,
  deleteCareer,
};
