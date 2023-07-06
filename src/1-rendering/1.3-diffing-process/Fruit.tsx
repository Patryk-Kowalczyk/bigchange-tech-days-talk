import { FC, ReactNode, useState } from 'react';

export const Fruit: FC<{ children: ReactNode }> = ({ children }) => {
  const [fruitCount, setFruitCount] = useState(0);

  return (
    <span>
      {children} | {fruitCount} | <button onClick={() => setFruitCount(fruitCount + 1)}>+</button>
    </span>
  );
};
