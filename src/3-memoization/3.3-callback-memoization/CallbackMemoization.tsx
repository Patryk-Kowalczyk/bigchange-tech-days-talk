import { useCallback, useState } from 'react';
import { Button } from '@/ui';

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

export const CallbackMemoization = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async () => {
    console.log({ user }); // This will log null all the time, even after the user is fetched. This is because dependency array is empty (will be called only during first render and memoized).
    // In this example, we don't need to add user to the dependency array, because we don't use it inside the function.
    // But it is worth to remember that if we use state or variable inside the function, we should add it to the dependency array.

    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const resUser = await response.json();
    setUser(resUser);
  }, []);

  return (
    <main>
      <div className="my-4">
        <Button onClick={fetchUser}>Fetch User</Button>
      </div>
      {user && (
        <div className="bg-white border rounded-lg shadow-lg p-4">
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{user.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Email</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Street</td>
                <td className="border px-4 py-2">{user.address.street}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">City</td>
                <td className="border px-4 py-2">{user.address.city}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
};
