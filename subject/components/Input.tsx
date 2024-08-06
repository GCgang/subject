import { InputHTMLAttributes } from 'react';
interface InputProps {
  name: string;
  error?: string;
  icon: JSX.Element;
}

export default function Input({
  name,
  error,
  icon,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div
        className={
          `flex rounded-3xl p-4 border ` +
          (error ? 'border-red-400' : 'border-black')
        }
      >
        {icon}
        <input className='ml-2 focus:outline-none' name={name} {...rest} />
      </div>
      {error && <div className='m-2 text-red-400'>{error}</div>}
    </div>
  );
}
