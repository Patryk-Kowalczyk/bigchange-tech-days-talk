import { Button } from '@/ui';
import { useReducer } from 'react';

/**
 * Reducer is a function that takes the current state and an action, and returns the new state.
 */
const reducer = (state: number, action: { type: 'increment' | 'decrement'; payload: number }) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
  }
};

export const SimpleReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0); // Hook for state management but in Redux style. As a generic type, we can pass the type of the state. As an argument, we pass the initial value of the state.

  return (
    <div>
      <header>BigChange</header>
      <main>
        <p className="text-xl">Count: {count}</p>
        <div className="grid grid-cols-2 gap-2 my-4">
          {/* dispatch is a function that takes an action object and sends it to the reducer. */}
          <Button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</Button>
          <Button color="secondary" onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
            Decrement
          </Button>
        </div>
      </main>
    </div>
  );
};
