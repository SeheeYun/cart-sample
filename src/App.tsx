import './style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './container/cart';
import Service from './container/service';
import Discount from './container/discount';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState({});
  const [discounts, setDiscounts] = useState({});
  const [cartItems, setCartItems] = useState({});

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
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/service" element={<Service items={items} />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
