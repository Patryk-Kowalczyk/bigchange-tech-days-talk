import clsx from 'clsx';
import { FC, LabelHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: FC<LabelProps> = ({ className, ...restProps }) => {
  return (
    <label className={twMerge(clsx('block text-sm font-medium mb-2'), className)} {...restProps} />
  );
};
