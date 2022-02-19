import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

type ServiceItem = {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  count: number;
  total: number;
};
type DiscountItem = {
  readonly id: string;
  readonly name: string;
  readonly rate: number;
  excluded: string[];
  total: number;
};
export type Item = ServiceItem & DiscountItem;
export type Items = {
  [key: string]: Item;
};

const Store = ({ children }: Props) => {
  const [items, setItems] = useState({});
  const [discounts, setDiscounts] = useState({});
  const [cartItems, setCartItems] = useState<Items>({});
  const [checkedItems, setCheckedItems] = useState<Items>({});

  const addCheckedItem = (item: Item) => {
    setCheckedItems(items => ({ ...items, [item.id]: item }));
  };
  const deleteCheckedItem = (item: Item) => {
    setCheckedItems(items => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
  };
  const resetChecked = () => {
    setCheckedItems({});
  };

  const addCartItems = () => {
    setCartItems(items => ({ ...items, ...checkedItems }));
  };
  const deleteCartItem = (item: Item) => {
    setCartItems(items => {
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
    setCartItems(items => ({
      ...items,
      [id]: { ...items[id], count: count + 1 },
    }));
  };
  const decrease = (item: Item) => {
    const { id, count } = item;
    if (count <= 1) {
      return;
    }
    setCartItems(items => ({
      ...items,
      [id]: { ...items[id], count: count - 1 },
    }));
  };

  const setItemTotal = (id: string, total: number) => {
    setCartItems(items => ({
      ...items,
      [id]: { ...items[id], total: total },
    }));
  };

  const setExcludedItems = (id: string, arr: string[]) => {
    setCartItems(items => ({
      ...items,
      [id]: { ...items[id], excluded: arr },
    }));
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
    deleteCartItem,
    resetChecked,
    increase,
    decrease,
    setItemTotal,
    setExcludedItems,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;

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
  deleteCartItem: (item: Item) => void;
  resetChecked: () => void;
  increase: (item: Item) => void;
  decrease: (item: Item) => void;
  setItemTotal: (id: string, total: number) => void;
  setExcludedItems: (id: string, arr: string[]) => void;
};
const ContextDefaultValues: ContextType = {
  items: {},
  discounts: {},
  cartItems: {},
  addCheckedItem: () => {},
  deleteCheckedItem: () => {},
  addCartItems: () => {},
  deleteCartItem: () => {},
  resetChecked: () => {},
  increase: () => {},
  decrease: () => {},
  setItemTotal: () => {},
  setExcludedItems: () => {},
};
const Context = createContext<ContextType>(ContextDefaultValues);
export function useStore() {
  return useContext(Context);
}
