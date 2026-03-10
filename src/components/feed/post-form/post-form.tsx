import Button from '@/components/layout/button';
import Input from '@/components/layout/input';
import Textarea from '@/components/layout/textarea';

export default function PostForm() {
  return (
    <div className='border border-border-gray rounded-2xl p-5'>
      <h2 className='font-bold text-[1.375rem] mb-5'>What is on your mind?</h2>

      <div className='mb-5'>
        <label className='mb-2 block' htmlFor='title'>
          Title
        </label>
        <Input id='title' placeholder='Hello world' />
      </div>

      <div className='mb-5'>
        <label className='mb-2 block' htmlFor='content'>
          Content
        </label>
        <Textarea id='content' placeholder='Content here' />
      </div>

      <div className='flex justify-end'>
        <Button type='submit'>Create</Button>
      </div>
    </div>
  );
}
