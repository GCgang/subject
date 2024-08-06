'use client';
import { useFormStatus } from 'react-dom';

interface ButtonProps {
  text: string;
}
export default function Button({ text }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button
      className='bg-gray-200 rounded-3xl p-4 hover:bg-gray-300 cursor-pointer active:scale-90 transition-transform duration-150'
      disabled={pending}
    >
      {pending ? '로딩 중...' : text}
    </button>
  );
}
