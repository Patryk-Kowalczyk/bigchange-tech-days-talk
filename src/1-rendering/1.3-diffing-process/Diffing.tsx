import { useState } from 'react';
import { Button } from '@/ui';
import { Fruit } from './Fruit';

export const Diffing = () => {
  const [isApple, setIsApple] = useState(true);

  return (
    <div>
      <div>{isApple ? <Fruit>🍎</Fruit> : <Fruit>🤖</Fruit>}</div>
      <Button onClick={() => setIsApple((prev) => !prev)}>Toggle</Button>
    </div>
  );
};
