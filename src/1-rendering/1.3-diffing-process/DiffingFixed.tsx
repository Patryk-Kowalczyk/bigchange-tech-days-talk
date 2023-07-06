import { useState } from 'react';
import { Button } from '@/ui';
import { Fruit } from './Fruit';

export const DiffingFixed = () => {
  const [isApple, setIsApple] = useState(true);

  return (
    <div>
      {/* Keys in this case are important because then react know that there are different components with same type */}
      <div>{isApple ? <Fruit key="apple">🍎</Fruit> : <Fruit key="orange">🍊</Fruit>}</div>
      <Button onClick={() => setIsApple((prev) => !prev)}>Toggle</Button>
    </div>
  );
};
