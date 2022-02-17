import React, { useEffect, useState } from 'react';
import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faXmark,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import Item, { ItemComponent } from './components/item/item';

type Items = {
  [key: string]: ItemComponent;
};

function App() {
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
    <div id="App">
      <div className="app-container">
        <header className="header">
          <button className="header__btn">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="header__title">
            <p>윤세희</p>
            <p>결제 목록</p>
          </div>
          <button className="header__btn">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </header>
        <main className="main">
          <div className="main__btns">
            <button>
              <FontAwesomeIcon icon={faCirclePlus} /> 시술
            </button>
            <button>
              <FontAwesomeIcon icon={faCirclePlus} /> 할인
            </button>
          </div>
          <ul>
            {Object.keys(items).map(key => (
              <Item key={key} item={items[key]} />
            ))}
          </ul>
        </main>
        <footer className="footer">
          <div className="footer__text">
            <p>합계</p>
            <p>0원</p>
          </div>
          <button className="footer__btn">다음</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
