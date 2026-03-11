"use client";

import { usePostFilters } from "@/hooks/post/use-post-filters";
import { FiltersForm, filtersSchema } from "@/schemas/post/filters-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function usePostFiltersForm() {
  const { title, username, updateFilters } = usePostFilters();

  const form = useForm<FiltersForm>({
    resolver: zodResolver(filtersSchema),
    defaultValues: { title, username },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = (data: FiltersForm) => {
    updateFilters(data);
  };

  const handleReset = () => {
    reset({ title: "", username: "" });
    updateFilters({ title: "", username: "" });
  };

  return {
    form,
    onSubmit,
    handleReset,
    handleSubmit,
  };
}
