import { useState, useEffect, useMemo, useCallback } from 'react';

// the useMemo hook memoizes the OUTPUT of a function

function App() {
  const [userNumber, setUserNumber] = useState('');
  const [randomInput, setRandomInput] = useState('');

  // By implementing useMemo the output of the fib function call will be
  // stored in fibNumber and persist across re-renders. Therefor we
  // achieve a performance gain because the component doesn't recalculate the
  // fibNumber each time state changes.

  // If the fib function is outside of the App component we only need to add
  // userNumber to the dependency array. If fib was located inside App, we would need
  // to apply useCallback to the function to memoize it.

  // Again useMemo memoizes the OUTPUT of a function and useCallback memoizes the
  // function itself.

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }, []);

  const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib]);

  useEffect(() => {
    console.log('New Number');
  }, [fibNumber]);

  return (
    <div
      className='App'
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <label>Fibonacci Sequence:</label>
      <input
        type='number'
        value={userNumber}
        placeholder='Position'
        onChange={(e) => setUserNumber(e.target.value)}
      />

      <p>Number: {fibNumber || '--'}</p>
      <br />
      <br />

      <input
        type='text'
        value={randomInput}
        placeholder='Random Input'
        onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>{randomInput}</p>
    </div>
  );
}

export default App;

// Dave Gray - useMemo explained
// https://www.youtube.com/watch?v=oR8gUi1LfWY
