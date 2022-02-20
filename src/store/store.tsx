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
};
const ContextDefaultValues: ContextType = {
  items: {},
  discounts: {},
};
const Context = createContext<ContextType>(ContextDefaultValues);
export function useStore() {
  return useContext(Context);
}

type ServiceItem = {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  count: number;
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
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
