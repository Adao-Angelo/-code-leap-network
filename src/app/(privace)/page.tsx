"use client";

import PostsFeed from "@/components/feed/posts-feed/posts-feed";
import Button from "@/components/layout/button";
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
        <header className="bg-primary w-full px-[2.313rem] py-[1.688rem] flex items-center justify-between">
          <h1 className="font-bold text-[1.375rem] text-white">
            CodeLeap Network
          </h1>
          <div className="flex gap-2 items-center">
            <p className="font-bold text-white">
              @ <span>{username}</span>
            </p>
            <Button onClick={() => handleLogout()} variant="danger">
              Logout
            </Button>
          </div>
        </header>

        <main className="p-5 flex flex-col items-center justify-center">
          <Suspense fallback={<div className="skeleton skeleton-card"></div>}>
            <PostsFeed />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
