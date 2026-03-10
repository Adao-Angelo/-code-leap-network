import { z } from 'zod';

export const createPostSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'Title must be at least 3 characters' })
    .max(100, { message: 'Title cannot exceed 100 characters' })
    .trim(),

  content: z
    .string()
    .min(10, { message: 'Content must be at least 10 characters' })
    .max(5000, { message: 'Content cannot exceed 5000 characters' })
    .trim(),
});

export type CreatePostFormData = z.infer<typeof createPostSchema>;
