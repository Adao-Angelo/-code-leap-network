"use client";

import Button from "@/components/layout/button";
import Loader from "@/components/layout/loader";
import { Modal } from "@/components/layout/modal";
import { useDeletePostModal } from "@/hooks/post/use-delete-post-modal";
import { Post } from "@/services/careers/post.interfaces";

type DeletePostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  post?: Post;
};

export default function DeletePostModal({
  isOpen,
  onClose,
  post,
}: DeletePostModalProps) {
  const { isPending, handleDelete } = useDeletePostModal({ post, onClose });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="rounded-2xl p-8 w-[41.25rem] max-w-[90vw]">
        <h2 className="font-bold text-[1.375rem] mb-10">
          Are you sure you want to delete this item?
        </h2>

        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose} disabled={isPending}>
            Cancel
          </Button>

          <Button
            variant="danger"
            onClick={handleDelete}
            disabled={isPending || !post?.id}
          >
            {isPending ? <Loader variant="white-mini" /> : "Delete"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
