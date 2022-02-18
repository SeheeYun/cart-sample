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
  deleteCartItem: (item: Item) => void;
  resetChecked: () => void;
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
};
const Context = createContext<ContextType>(ContextDefaultValues);
export function useStore() {
  return useContext(Context);
}

export type Item = {
  readonly id: string;
  readonly name: string;
  checked: boolean;
  readonly price?: number;
  readonly rate?: number;
  count?: number;
};
export type Items = {
  [key: string]: Item;
};

const Store = ({ children }: Props) => {
  const [items, setItems] = useState({});
  const [discounts, setDiscounts] = useState({});
  const [cartItems, setCartItems] = useState<Items>({});
  const [checkedItems, setCheckedItems] = useState<Items>({});

  const addCheckedItem = (item: Item) => {
    setCheckedItems(items => {
      const updateItems = { ...items };
      updateItems[item.id] = item;
      return updateItems;
    });
  };
  const deleteCheckedItem = (item: Item) => {
    setCheckedItems(items => {
      const updateItems = { ...items };
      delete updateItems[item.id];
      return updateItems;
    });
  };

  const addCartItems = () => {
    setCartItems(items => {
      return { ...items, ...checkedItems };
    });
  };
  const deleteCartItem = (item: Item) => {
    setCartItems(items => {
      const updateItems = { ...items };
      delete updateItems[item.id];
      return updateItems;
    });
  };

  const resetChecked = () => {
    setCheckedItems({});
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
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
