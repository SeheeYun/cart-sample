import React, { useEffect, useState } from 'react';
import './style/App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faXmark,
  faCirclePlus,
} from '@fortawesome/free-solid-svg-icons';
import Item, { ItemComponent } from './components/item';

type Items = {
  [key: string]: ItemComponent;
};

function App() {
  const [items, setItems] = useState<Items>({});
  const [discounts, setDiscounts] = useState({});
  const [currencyCode, setCurrencyCode] = useState('KRW');

  console.log(items);

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
      <header className="header">
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div>윤세희</div>
        <button>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </header>
      <main className="main">
        <div className="main__btns">
          <button>
            <FontAwesomeIcon icon={faCirclePlus} />
            시술
          </button>
          <button>
            <FontAwesomeIcon icon={faCirclePlus} />
            할인
          </button>
          <ul>
            {Object.keys(items).map(key => (
              <Item item={items[key]} />
            ))}
            <li>시술명</li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <div>0원</div>
        <button>다음</button>
      </footer>
    </div>
  );
}

export default App;
