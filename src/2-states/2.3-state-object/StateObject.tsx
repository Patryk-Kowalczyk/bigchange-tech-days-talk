import { Input, Label } from '@/ui';
import { ChangeEvent, useState } from 'react';

interface User {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
}

export const StateObject = () => {
  const [user, setUser] = useState<User>({
    name: 'John',
    age: 30,
    address: {
      street: '123 Fake St',
      city: 'London'
    }
  }); // Objects are passed by reference, so we need to copy the object before modifying it.
  // Every setState will create a new object, so we need to copy the whole object every time we want to change a property.
  // ⚠️ Even nested objects will need to be copied.

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    // user['name'] = event.target.value; // This will not work, because we are mutating the state directly
    // setUser(user); // This will not work, because we are passing the same object reference

    setUser({
      ...user, // Spread operator to copy the user object
      name: event.target.value
    });
  };

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      age: Number(event.target.value)
    });
  };

  const handleStreetChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      address: {
        // In case of nested objects, we need to copy the nested object as well
        ...user.address, // Spread operator to copy the address object
        street: event.target.value // And then we can override the street
      }
    });
  };

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: event.target.value
      }
    });
  };

  return (
    <main>
      <p className="text-xl">
        Name: <span className="text-gray-700">{user.name}</span>
      </p>
      <p className="text-xl">
        Age: <span className="text-gray-700">{user.age}</span>
      </p>
      <p className="text-lg">
        Street: <span className="text-gray-700">{user.address.street}</span>
      </p>
      <p className="text-lg">
        City: <span className="text-gray-700">{user.address.city}</span>
      </p>
      <div className="my-4">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" onChange={handleNameChange} value={user.name} />

        <Label htmlFor="age" className="mt-2">
          Age
        </Label>
        <Input id="age" name="age" onChange={handleAgeChange} type="number" value={user.age} />

        <Label htmlFor="street" className="mt-2">
          Street
        </Label>
        <Input
          id="street"
          name="street"
          onChange={handleStreetChange}
          value={user.address.street}
        />

        <Label htmlFor="city" className="mt-2">
          City
        </Label>
        <Input id="city" name="city" onChange={handleCityChange} value={user.address.city} />
      </div>
    </main>
  );
};
