import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = ({ className, ...restProps }) => {
  return (
    <input
      className={twMerge(
        clsx(
          'py-3 px-4 block w-full border border-gray-300 rounded-md text-sm focus:border-primary focus:ring-primary'
        ),
        className
      )}
      {...restProps}
    />
  );
};
