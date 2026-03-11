import { useEffect, useRef } from "react";

export function useInfiniteScroll(
  fetchNextPage: () => void,
  hasNextPage?: boolean,
) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return ref;
}
