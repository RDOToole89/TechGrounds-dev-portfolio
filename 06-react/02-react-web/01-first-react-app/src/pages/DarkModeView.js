import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import List from '../components/List/List';
import useDarkMode from '../hooks/useDarkMode';
import { Title, Wrapper } from '../styled/StyledComponents';

function DarkModeView() {
  let navigate = useNavigate();
  let location = useLocation();
  console.log(navigate);
  console.log(location);

  const darkEnabled = useDarkMode();
  console.log(darkEnabled);
  // Examples of useMemo and useCallback
  // useMemo: Returns and stores the calculated value of a function in a variable
  // useCallBack: Returns and stores the actual function itself in a variable

  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  // useMemo is a way to CACHE expensive function outputs. When react rerenders a component
  // it runs the entire function body. By utilizing the useMemo hook we essentially
  // tell react to ONLY run this 'expensive' function if the input is actually changing.
  // For this reason we pass number to the dependency array.
  const doubleNumber = useMemo(() => {
    slowFunction(number);
  }, [number]);

  const getItems = useCallback(
    (incrementor) => {
      console.log('GET ITEMS FIRED');
      return [number, number + 1 + incrementor, number + 2 + incrementor];
    },
    [number]
  );

  // using useMemo here we set darkMode as a dependency so that it doesn't log
  // 'Theme Changed' in the useEffect unless the darkMode boolean actually changes
  const theme = useMemo(() => {
    return {
      backgroundColor: darkMode ? '#333' : '#FFF',
      color: darkMode ? '#fff' : '#333',
      marginBottom: '1rem',
    };
  }, [darkMode]);

  useEffect(() => {
    console.log('Theme Changed');
  }, [theme]);

  return (
    <Wrapper>
      <Title>Dark Mode</Title>

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
