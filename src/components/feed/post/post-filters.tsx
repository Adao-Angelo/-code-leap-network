"use client";

import Button from "@/components/layout/button";
import { FormField, FormInput } from "@/components/layout/form";
import { usePostFiltersForm } from "@/hooks/post/use-post-filters-form";

export default function PostFilters() {
  const { form, onSubmit, handleReset } = usePostFiltersForm();
  const {
    register,
    formState: { errors },
    handleSubmit: rhfHandleSubmit,
  } = form;

  return (
    <form
      onSubmit={rhfHandleSubmit(onSubmit)}
      className="flex flex-col md:flex-row md:items-end gap-2 mb-2"
    >
      <div className="flex gap-2 items-end h-fit">
        <FormField
          className="mb-0"
          label="Filter by title"
          error={errors.title}
        >
          <FormInput
            id="title"
            placeholder="Hello world"
            registration={register("title")}
          />
        </FormField>

        <FormField
          className="mb-0"
          label="Filter by username"
          error={errors.username}
        >
          <FormInput
            id="username"
            placeholder="Username"
            registration={register("username")}
          />
        </FormField>
      </div>

      <div className="flex h-fit gap-2">
        <Button type="submit">Apply</Button>
        <Button variant="outline" type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
