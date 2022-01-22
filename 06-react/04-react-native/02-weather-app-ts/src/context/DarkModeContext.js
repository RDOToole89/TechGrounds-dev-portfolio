import { useState, createContext } from 'react';

const initialDarkMode = {
  color: '#000',
  backgroundColor: '#fff',
};

const DarkModeContext = createContext();

const DarkModeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  return (
    <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
