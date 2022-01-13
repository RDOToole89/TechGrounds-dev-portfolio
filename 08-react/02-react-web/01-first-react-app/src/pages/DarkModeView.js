import React, { useState, useMemo } from 'react';
import List from '../components/List/List';
import Navbar from '../components/Navbar/Navbar';
import { Wrapper } from '../styled/StyledComponents';

function DarkModeView() {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // useMemo is a way to cache expensive functions. When react rerenders a component
  // it runs the entire function body. By utilizing the useMemo hook we essentially
  // tell react to ONLY run this 'expensive' function if the input is actually changing.
  // For this reason we pass number to the dependency array.
  const doubleNumber = useMemo(() => {
    slowFunction(number);
  }, [number]);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };

  const theme = {
    backgroundColor: darkMode ? '#333' : '#FFF',
    color: darkMode ? '#fff' : '#333',
    marginBottom: '1rem',
  };

  return (
    <Wrapper>
      <Navbar />

      <div style={theme}>
        <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />

        <button onClick={() => setDarkMode((prevDark) => !prevDark)}>Change Theme</button>
        <div style={theme}>{doubleNumber}</div>
      </div>

      <div style={theme}>
        <input type='number' value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDarkMode((prevDark) => !prevDark)}>Toggle theme</button>

        <List getItems={getItems} />
      </div>
    </Wrapper>
  );
}

export default DarkModeView;

function slowFunction(num) {
  console.log('Calling Slow Function');

  for (let i = 0; i <= 100000000; i++) {}
  return num * 2;
}
