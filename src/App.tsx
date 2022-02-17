import './style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './container/cart';
import Service from './container/service';
import Discount from './container/discount';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/service" element={<Service />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
