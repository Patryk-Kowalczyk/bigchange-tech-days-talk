import { useState } from 'react';
import { ListItem, MemoizedListItem } from './ListItem';
import { Button } from '../../ui/Button';

export const Memo = () => {
  const [listItems, setListItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ]);

  const appendItem = () => {
    setListItems((prevListItems) => [
      ...prevListItems,
      { id: prevListItems.length + 1, name: `Item ${prevListItems.length + 1}` }
    ]);
  };

  return (
    <main>
      <h3 className="text-2xl font-semibold mb-4">Memo List</h3>
      <ul>
        {listItems.map((item) => (
          <ListItem key={item.id} id={item.id}>
            {item.name}
          </ListItem>
          // <MemoizedListItem key={item.id} id={item.id}>
          //   {item.name}
          // </MemoizedListItem>
        ))}
      </ul>
      <div className="my-4">
        <Button onClick={appendItem}>Append Item</Button>
      </div>
    </main>
  );
};
