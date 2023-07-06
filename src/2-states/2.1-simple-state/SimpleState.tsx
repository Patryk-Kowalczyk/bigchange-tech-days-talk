import { Button } from '@/ui';
import { useState } from 'react';

export const SimpleState = () => {
  const [count, setCount] = useState<number>(0); // Hook for state. As a generic type, we pass the type of the state. As an argument, we pass the initial value of the state.

  return (
    <div>
      <header>BigChange</header>
      <main>
        <p className="text-xl">Count: {count}</p>
        <div className="grid grid-cols-2 gap-2 my-4">
          <Button onClick={() => setCount(count + 1)}>Increment</Button>
          <Button color="secondary" onClick={() => setCount(count - 1)}>
            Decrement
          </Button>
        </div>
      </main>
    </div>
  );
};
