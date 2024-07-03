import React, { createContext, useState, useContext } from 'react';

const SelectedButtonContext = createContext();

export const SelectedButtonProvider = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState('Home');

  return (
    <SelectedButtonContext.Provider
      value={{ selectedButton, setSelectedButton }}
    >
      {children}
    </SelectedButtonContext.Provider>
  );
};

export const useSelectedButton = () => {
  return useContext(SelectedButtonContext);
};
