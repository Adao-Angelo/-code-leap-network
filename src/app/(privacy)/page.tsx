"use client";

import PostsFeed from "@/components/feed/posts-feed/posts-feed";
import PageHeader from "@/components/layout/page-header";
import { useAuthStore } from "@/store/use-auth.store";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export default function Home() {
  const { username, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace("/login");
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-[50rem] min-h-screen shadow-xl">
        <PageHeader username={username} onLogout={handleLogout} />

        <main className="p-5 flex flex-col items-center justify-center">
          <Suspense fallback={<div className="skeleton skeleton-card"></div>}>
            <PostsFeed />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
