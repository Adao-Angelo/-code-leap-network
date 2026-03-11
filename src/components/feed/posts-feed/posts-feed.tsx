"use client";

import DeletePostModal from "@/components/feed/modals/delete-post-modal";
import EditPostModal from "@/components/feed/modals/edit-post-modal";
import PostForm from "@/components/feed/post-form/post-form";
import PostCard from "@/components/feed/post/post-card";
import Button from "@/components/layout/button";
import { usePostFilters } from "@/hooks/post/use-post-filters";
import { usePosts } from "@/hooks/post/use-posts";
import { Post } from "@/services/careers/post.interfaces";
import { useAuthStore } from "@/store/use-auth.store";

import { useState } from "react";
import PostFilters from "../post/post-filters";

export default function PostsFeed() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post>();
  const [postToDelete, setPostToDelete] = useState<Post | undefined>(undefined);

  const { title, username } = usePostFilters();
  const { username: loggedUsername } = useAuthStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError } =
    usePosts({
      title,
      username,
    });

  const posts = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="w-full flex flex-col gap-8">
      <PostForm />
      <PostFilters />

      {!data && !isError && (
        <div className="flex flex-col gap-2 py-4">
          <div className="skeleton skeleton-card">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="skeleton skeleton-card">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
          <div className="skeleton skeleton-card">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      )}

      {isError && (
        <p className="text-destructive text-center">
          We couldn’t load the posts right now. Please refresh or try again
          later.
        </p>
      )}

      {posts.map((post) => {
        const canModify = post.username === loggedUsername;

        return (
          <PostCard
            key={post.id}
            post={post}
            canModify={canModify}
            onEdit={() => {
              if (!canModify) return;
              setPostToEdit(post);
              setIsEditModalOpen(true);
            }}
            onDelete={() => {
              if (!canModify) return;
              setPostToDelete(post);
              setIsDeleteModalOpen(true);
            }}
          />
        );
      })}

      {isFetchingNextPage && (
        <div className="flex justify-center py-4">
          <div className="skeleton skeleton-card">
            <div className="skeleton skeleton-avatar"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        </div>
      )}

      {!isFetchingNextPage && hasNextPage && (
        <Button variant="outline" onClick={() => fetchNextPage()}>
          Load more
        </Button>
      )}

      {!isFetchingNextPage && !hasNextPage && posts.length > 0 && (
        <p className="text-center text-gray-500">No more posts</p>
      )}

      <DeletePostModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        post={postToDelete}
      />

      <EditPostModal
        isOpen={isEditModalOpen}
        post={postToEdit}
        onClose={() => setIsEditModalOpen(false)}
      />
    </div>
  );
}
