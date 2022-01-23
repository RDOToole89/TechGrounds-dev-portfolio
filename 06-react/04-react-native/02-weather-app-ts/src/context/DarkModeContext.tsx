import React, { useState, createContext, FC } from 'react';

interface IDarkModeContext {
  dark: boolean;
  toggleDark?: () => void;
}

const defaultState = {
  dark: false,
};

export const DarkModeContext = createContext<IDarkModeContext>(defaultState);

export const DarkModeProvider: FC = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>{children}</DarkModeContext.Provider>
  );
};
