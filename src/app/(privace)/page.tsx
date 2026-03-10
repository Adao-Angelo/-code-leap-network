'use client';

import DeletePostModal from '@/components/feed/modals/delete-post-modal';
import EditPostModal from '@/components/feed/modals/edit-post-modal';
import PostForm from '@/components/feed/post-form/post-form';
import PostCard from '@/components/feed/post/post-card';
import { useState } from 'react';

export default function Home() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const examplePost = {
    id: 1,
    title: 'My First Post at CodeLeap Network!',
    username: 'Panda',
    createdAt: '25 minutes ago',
    content:
      'Learning programming can feel challenging at first, but starting small makes a big difference. Pick a language, practice every day, and don’t be afraid to make mistakes. Every mistake is a step closer to getting better!\n\nLearning programming can feel challenging at first, but starting small makes a big difference. Pick a language, practice every day, and don’t be afraid to make mistakes. Every mistake is a step closer to getting better!',
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white w-full max-w-[50rem] min-h-screen shadow-xl'>
        <header className='bg-primary w-full px-[2.313rem] py-[1.688rem]'>
          <h1 className='font-bold text-[1.375rem] text-white'>
            CodeLeap Network
          </h1>
        </header>

        <main className='p-5 flex flex-col gap-8'>
          <PostForm />

          <PostCard
            post={examplePost}
            onEdit={() => setIsEditModalOpen(true)}
            onDelete={() => setIsDeleteModalOpen(true)}
          />
        </main>
      </div>

      <DeletePostModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />

      <EditPostModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={() => {}}
      />
    </div>
  );
}
