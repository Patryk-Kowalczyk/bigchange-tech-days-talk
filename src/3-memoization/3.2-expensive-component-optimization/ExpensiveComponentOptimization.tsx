import { Button, Input, Label } from '@/ui';
import { fibonacci } from '@/utils';
import { useMemo, useState } from 'react';

export const ExpensiveComponentOptimization = () => {
  const [counter, setCounter] = useState(0);
  const [n, setN] = useState(0);

  const fibValue = useMemo(() => fibonacci(n), [n]); // We use useMemo to memoize the result of the fibonacci function.
  // This way, the function will only be called when the value of n changes.

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
