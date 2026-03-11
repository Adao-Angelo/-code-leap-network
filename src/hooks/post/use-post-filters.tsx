import { useRouter, useSearchParams } from "next/navigation";

export function usePostFilters() {
  const router = useRouter();
  const params = useSearchParams();

  const title = params.get("title") || "";
  const username = params.get("username") || "";

  function updateFilters(newFilters: { title?: string; username?: string }) {
    const search = new URLSearchParams(params.toString());

    if (newFilters.title !== undefined) {
      search.set("title", newFilters.title);
    }

    if (newFilters.username !== undefined) {
      search.set("username", newFilters.username);
    }

    router.push(`?${search.toString()}`);
  }

  return {
    title,
    username,
    updateFilters,
  };
}
