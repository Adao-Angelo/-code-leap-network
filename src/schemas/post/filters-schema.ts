import z from "zod";

export const filtersSchema = z.object({
  title: z.string().max(50, "Title too long").optional(),
  username: z.string().max(30, "Username too long").optional(),
});

export type FiltersForm = z.infer<typeof filtersSchema>;
