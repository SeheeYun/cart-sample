import { Item, Items, useStore } from '../store/store';
import MenuItem from '../components/item/menuItem';
import MenuHeader from '../components/header/menuHeader';
import MenuFooter from '../components/footer/menuFooter';
import { useEffect, useState } from 'react';

function Discount() {
  const { discounts } = useStore();
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
    const discounts = localStorage.getItem('discounts');
    const updated = discounts
      ? { ...JSON.parse(discounts), ...checked }
      : checked;
    localStorage.setItem('discounts', JSON.stringify(updated));
  };

  useEffect(() => {
    return () => {
      setChecked({});
    };
  }, []);

  return (
    <div id="App">
      <MenuHeader title={'할인 메뉴'} />
      <main className="main">
        <ul>
          {Object.keys(discounts).map(key => (
            <MenuItem
              key={key}
              item={{ ...discounts[key], id: key, excluded: [], total: 0 }}
              checked={false}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </main>
      <MenuFooter
        text={'할인을 선택하세요. (여러개 선택 가능)'}
        setLocalStorage={setLocalStorage}
      />
    </div>
  );
}

export default Discount;
