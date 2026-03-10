'use client';

import DeletePostModal from '@/components/feed/modals/delete-post-modal';
import EditPostModal from '@/components/feed/modals/edit-post-modal';
import PostForm from '@/components/feed/post-form/post-form';
import PostCard from '@/components/feed/post/post-card';
import Loader from '@/components/layout/loader';
import { useCareers } from '@/hooks/career/use-careers';
import { useState } from 'react';

export default function Home() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data: Careers, isLoading, isError } = useCareers();

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white w-full max-w-[50rem] min-h-screen shadow-xl'>
        <header className='bg-primary w-full px-[2.313rem] py-[1.688rem]'>
          <h1 className='font-bold text-[1.375rem] text-white'>
            CodeLeap Network
          </h1>
        </header>

        <main className='p-5 flex flex-col item-center justify-center gap-8'>
          <PostForm />
          {isLoading && (
            <div className='flex items-center justify-center h-60'>
              <Loader />
            </div>
          )}
          {isError && (
            <p className='text-destructive text-center'>
              Server not available, please try again later or contact CodeLeap
              Network support
            </p>
          )}

          {Careers?.results.map((Career) => (
            <PostCard
              key={Career.id}
              post={Career}
              onEdit={() => setIsEditModalOpen(true)}
              onDelete={() => setIsDeleteModalOpen(true)}
            />
          ))}
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
