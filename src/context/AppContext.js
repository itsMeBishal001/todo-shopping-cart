import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ data, setData, cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
