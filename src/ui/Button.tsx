import clsx from 'clsx';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary';

  variant?: 'contained' | 'outlined';
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  color = 'primary',
  variant = 'contained',
  ...restProps
}) => {
  return (
    <button
      className={twMerge(
        clsx('px-3 py-1 rounded-md text-white', {
          'bg-primary': color === 'primary' && variant === 'contained',
          'bg-secondary': color === 'secondary' && variant === 'contained',
          'border border-primary': color === 'primary' && variant === 'outlined',
          'border border-secondary': color === 'secondary' && variant === 'outlined'
        }),
        className
      )}
      {...restProps}>
      {children}
    </button>
  );
};
