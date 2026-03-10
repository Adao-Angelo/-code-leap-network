import { API } from '@/services/api';
import { Post, PostCreateDto, PostUpdateDto } from './post.interfaces';

async function createPost(data: PostCreateDto): Promise<Post> {
  const response = await API.post('/careers', data);
  return response.data;
}

async function getAllPosts(): Promise<{
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}> {
  const response = await API.get('/careers');
  return response.data;
}

async function getPost(id: number): Promise<Post> {
  const response = await API.get(`/careers/${id}`);
  return response.data;
}

async function updatePost(id: number, data: PostUpdateDto): Promise<Post> {
  const response = await API.patch(`/careers/${id}`, data);
  return response.data;
}

async function deletePost(id: number): Promise<void> {
  await API.delete(`/careers/${id}`);
}

export const PostsService = {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
};
