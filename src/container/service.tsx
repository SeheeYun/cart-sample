import BaseContainer from './base';
import Item, { ItemComponent } from '../components/item/item';
import { useState } from 'react';

type Props = {
  items: Items;
};

type Items = {
  [key: string]: ItemComponent;
};

function Service({ items }: Props) {
  const [checkedItems, setCheckedItems] = useState<Items>({});

  console.log(checkedItems);

  const addCheckedItem = (item: ItemComponent) => {
    setCheckedItems(preItems => {
      const items = { ...preItems };
      items[item.id] = item;
      return items;
    });
  };

  const deleteCheckedItem = (item: ItemComponent) => {
    setCheckedItems(preItems => {
      const items = { ...preItems };
      delete items[item.id];
      return items;
    });
  };

  return (
    <BaseContainer type={'menu'}>
      <ul>
        {Object.keys(items).map(key => (
          <Item
            key={key}
            item={{ ...items[key], id: key, checked: false }}
            addCheckedItem={addCheckedItem}
            deleteCheckedItem={deleteCheckedItem}
          />
        ))}
      </ul>
    </BaseContainer>
  );
}

export default Service;
