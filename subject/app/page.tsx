'use client';

import Input from '@/components/Input';
import Button from '@/components/Button';
import { FaFireAlt, FaUser, FaKey, FaCheckCircle } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useFormState } from 'react-dom';
import { logIn } from './action';

interface FormState {
  success?: boolean;
  message?: string;
  fieldErrors?: {
    email?: string[];
    username?: string[];
    password?: string[];
  };
}

export default function Home() {
  const [state, action] = useFormState<FormState>(logIn, null);
  console.log(state);
  return (
    <div className='flex flex-col justify-center items-center mt-20'>
      <div>
        <FaFireAlt className='text-red-400 w-16 h-16' />
      </div>
      <form action={action} className='flex flex-col gap-4 mt-8 w-2/5'>
        <Input
          name='email'
          type='email'
          placeholder='Email'
          required
          icon={<MdEmail />}
          errors={state?.fieldErrors?.email || []}
        />
        <Input
          name='username'
          type='text'
          placeholder='Username'
          required
          icon={<FaUser />}
          errors={state?.fieldErrors?.username || []}
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          required
          icon={<FaKey />}
          errors={state?.fieldErrors?.password || []}
        />
        <Button text='Log in' />
        {state?.success && (
          <div className='flex items-center bg-teal-400 rounded-3xl p-4'>
            <FaCheckCircle />
            <span className='ml-2'>{state.message}</span>
          </div>
        )}
      </form>
    </div>
  );
}
