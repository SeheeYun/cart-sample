import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type Props = {
  children: ReactNode;
};
type ContextType = {
  items: Items;
  discounts: Items;
  cartItems: Items;
  addCheckedItem: (item: Item) => void;
  deleteCheckedItem: (item: Item) => void;
  addCartItems: () => void;
};
const ContextDefaultValues: ContextType = {
  items: {},
  discounts: {},
  cartItems: {},
  addCheckedItem: () => {},
  deleteCheckedItem: () => {},
  addCartItems: () => {},
};
const Context = createContext<ContextType>(ContextDefaultValues);
export function useStore() {
  return useContext(Context);
}
export type Item = {
  id: string;
  checked: boolean;
  name: string;
  price?: number;
  count?: number;
  rate?: number;
};
export type Items = {
  [key: string]: Item;
};

const Store = ({ children }: Props) => {
  const [items, setItems] = useState({});
  const [discounts, setDiscounts] = useState({});
  const [cartItems, setCartItems] = useState({});
  const [checkedItems, setCheckedItems] = useState<Items>({});

  console.log(cartItems);

  const addCheckedItem = (item: Item) => {
    setCheckedItems(preItems => {
      const items = { ...preItems };
      items[item.id] = item;
      return items;
    });
  };

  const deleteCheckedItem = (item: Item) => {
    setCheckedItems(preItems => {
      const items = { ...preItems };
      delete items[item.id];
      return items;
    });
  };

  const addCartItems = () => {
    setCartItems(cartItems => {
      return { ...cartItems, ...checkedItems };
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
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const value = {
    items,
    discounts,
    cartItems,
    addCheckedItem,
    deleteCheckedItem,
    addCartItems,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
