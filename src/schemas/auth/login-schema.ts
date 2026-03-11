import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(30, "Username can be at most 30 characters long")
    .trim(),
});

export type LoginData = z.infer<typeof loginSchema>;
