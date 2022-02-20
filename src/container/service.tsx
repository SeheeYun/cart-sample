import { Item, Items, useStore } from '../store/store';
import MenuItem from '../components/item/menuItem';
import { useEffect, useState } from 'react';
import MenuHeader from '../components/header/menuHeader';
import MenuFooter from '../components/footer/menuFooter';

function Service() {
  const { items } = useStore();
  const [checked, setChecked] = useState<Items>({});

  const handleChecked = (checked: boolean, item: Item) => {
    checked
      ? setChecked(items => ({ ...items, [item.id]: item }))
      : setChecked(items => {
          const updated = { ...items };
          delete updated[item.id];
          return updated;
        });
  };

  const setLocalStorage = () => {
    const items = localStorage.getItem('items');
    const updated = items ? { ...JSON.parse(items), ...checked } : checked;
    localStorage.setItem('items', JSON.stringify(updated));
  };

  useEffect(() => {
    return () => {
      setChecked({});
    };
  }, []);

  return (
    <div id="App">
      <MenuHeader title={'시술 메뉴'} />{' '}
      <main className="main">
        <ul>
          {Object.keys(items).map(key => (
            <MenuItem
              key={key}
              item={{ ...items[key], id: key }}
              checked={false}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </main>
      <MenuFooter
        text={'서비스를 선택하세요. (다수 선택 가능)'}
        setLocalStorage={setLocalStorage}
      />
    </div>
  );
}

export default Service;
