import { InputHTMLAttributes } from 'react';
interface InputProps {
  name: string;
  errors?: string[];
  icon: JSX.Element;
}

export default function Input({
  name,
  errors = [],
  icon,
  ...rest
}: InputProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <div
        className={
          `flex items-center rounded-3xl p-4 border ` +
          (errors.length >= 1 ? 'border-red-400' : 'border-black')
        }
      >
        {icon}
        <input className='ml-2 focus:outline-none' name={name} {...rest} />
      </div>
      {errors &&
        errors.map((errors, index) => (
          <div key={index} className='m-2 text-red-400'>
            {errors}
          </div>
        ))}
    </div>
  );
}
