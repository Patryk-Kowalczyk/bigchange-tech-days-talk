import { Button, Input, Label } from '@/ui';
import { fibonacci } from '@/utils';
import { useState } from 'react';

export const ExpensiveComponent = () => {
  const [counter, setCounter] = useState(0);
  const [n, setN] = useState(0); // We store the value of the input for the nth Fibonacci number

  const fibValue = fibonacci(n); // This is an expensive operation and will slow down the app in every re-render

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setN(value);
  };

  return (
    <main>
      <p className="text-xl">
        Fibonacci: {fibValue} | Counter: {counter}
      </p>
      <div className="flex flex-col gap-2">
        <Label>
          Nth Fibonacci number
          <Input id="n" value={n} onChange={handleInputChange} />
        </Label>
        {/* This change will re-render component */}
        <Button onClick={() => setCounter(counter + 1)}>Increment</Button>
      </div>
    </main>
  );
};
