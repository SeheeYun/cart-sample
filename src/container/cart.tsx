import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Item, Items } from '../store/store';
import ServiceItem from '../components/item/serviceItem';
import DiscountItem from '../components/item/discountItem';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

function Cart() {
  const [items, setItems] = useState<Items>({});
  const [discounts, setDiscounts] = useState<Items>({});
  const [total, setTotal] = useState(0);

  const getTotal = () => {
    if (
      Object.keys(items).length === 0 &&
      Object.keys(discounts).length === 0
    ) {
      return 0;
    }

    const itemTotal = Object.keys(items)
      .map(key => items[key].price * items[key].count)
      .reduce((a, b) => a + b, 0);

    const discountTotal = Object.keys(discounts)
      .map(key => discounts[key].total)
      .reduce((a, b) => a + b, 0);

    return itemTotal + discountTotal;
  };

  const deleteItem = (item: Item) => {
    setItems(items => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
  };
  const deleteDiscount = (item: Item) => {
    setDiscounts(items => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
  };

  const increase = (item: Item) => {
    const { id, count } = item;
    if (count >= 100) {
      return;
    }
    setItems(items => ({
      ...items,
      [id]: { ...items[id], count: count + 1 },
    }));
  };
  const decrease = (item: Item) => {
    const { id, count } = item;
    if (count <= 1) {
      return;
    }
    setItems(items => ({
      ...items,
      [id]: { ...items[id], count: count - 1 },
    }));
  };

  const setExcludedItems = (id: string, arr: string[]) => {
    setDiscounts(items => ({
      ...items,
      [id]: { ...items[id], excluded: arr },
    }));
  };
  const setDicountTotal = (id: string, total: number) => {
    setDiscounts(items => ({
      ...items,
      [id]: { ...items[id], total: total },
    }));
  };

  useEffect(() => {
    const items = localStorage.getItem('items');
    const discounts = localStorage.getItem('discounts');
    items && setItems(JSON.parse(items));
    discounts && setDiscounts(JSON.parse(discounts));
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('discounts', JSON.stringify(discounts));
  }, [items, discounts]);

  useEffect(() => {
    setTotal(getTotal());
  }, [items, discounts]);

  return (
    <div id="App">
      <Header />
      <main className="main">
        <div className="main__btns">
          <button>
            <Link to="/service">
              <FontAwesomeIcon icon={faCirclePlus} /> 시술
            </Link>
          </button>
          <button>
            <Link to="/discount">
              <FontAwesomeIcon icon={faCirclePlus} /> 할인
            </Link>
          </button>
        </div>
        <ul>
          {Object.keys(items).length !== 0 &&
            Object.keys(items).map(key => (
              <ServiceItem
                key={key}
                item={items[key]}
                deleteItem={deleteItem}
                increase={increase}
                decrease={decrease}
              />
            ))}
          {Object.keys(discounts).length !== 0 &&
            Object.keys(discounts).map(key => (
              <DiscountItem
                key={key}
                item={discounts[key]}
                items={items}
                deleteDiscount={deleteDiscount}
                setExcludedItems={setExcludedItems}
                setDicountTotal={setDicountTotal}
              />
            ))}
        </ul>
      </main>
      <Footer total={total} />
    </div>
  );
}

export default Cart;
