import { FC, memo } from 'react';

interface ListItemProps {
  children: React.ReactNode;
  id: number;
}

export const ListItem: FC<ListItemProps> = ({ children, id }) => {
  console.log(`ListItem {${id}} rendered`);
  return (
    <li className="border px-4 py-2 text-gray-700" data-item-id={id}>
      {children}
    </li>
  );
};

export const MemoizedListItem = memo(ListItem);
