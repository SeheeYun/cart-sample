import { useEffect, useState } from 'react';
import BaseContainer from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import Item, { ItemComponent } from '../components/item/item';
import { Link } from 'react-router-dom';

type Items = {
  [key: string]: ItemComponent;
};

function Cart() {
  const [items, setItems] = useState<Items>({});
  const [discounts, setDiscounts] = useState({});
  const [currencyCode, setCurrencyCode] = useState('KRW');
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(pre => {
      return pre >= 100 ? 100 : ++pre;
    });
  };

  const decrease = () => {
    setCount(pre => {
      return pre <= 1 ? 1 : --pre;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_COLAVOLAB_API;
      if (!url) {
        return;
      }

      const res = await fetch(url, {
        method: 'GET',
      });
      const data = await res.json();
      setItems(data.items);
      setDiscounts(data.discounts);
      setCurrencyCode(data.currency_code);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <BaseContainer type={'cart'}>
      <>
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
          {Object.keys(items).map(key => (
            <Item key={key} item={items[key]} />
          ))}
        </ul>
      </>
    </BaseContainer>
  );
}

export default Cart;
