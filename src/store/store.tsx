import React, { createContext, ReactNode, useContext, useState } from 'react';

type Props = {
  children: ReactNode;
};

type ContextType = {
  user: string;
};

const ContextDefaultValues: ContextType = {
  user: 'qwe',
};

const Context = createContext<ContextType>(ContextDefaultValues);

export function useStore() {
  return useContext(Context);
}

const Store = ({ children }: Props) => {
  const user = 'qeqeq';
  const value = {
    user,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Store;
