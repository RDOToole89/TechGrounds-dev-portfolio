import { useState, useEffect, useCallback } from 'react';

// useCallback memoizes a function to create referential equality
// it stores the entire function for later use.
// Example:
// 5 === 5 // true
// "string" === "string" // true
// {} === {} // false

// Because objects refer to a different space in memory.

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  // Because sum is defined outside of useEffect it will
  // be re-created every time the state changes and the
  // component re-renders. Even when we're only using the
  // input which has nothing to do with sum.

  // const sum = () => num1 + num2

  // useCallback memoizes the function and gives it referential equality
  // useCallback makes sure that sum is not recreated on each state change
  // It's used for optimization purposes. If we have our function in a
  // dependency array it can prevent causing an infinite loop.

  // useCallback wraps the function and has a dependency array
  const sum = useCallback(() => num1 + num2, [num1, num2]);

  // const buildArray = () => [num1, num2];
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value: ${sum()}`);
    console.log(`New array. Array: ${buildArray()}`);

    // creates an endless rendering loop. Because an Array is not
    // a primitive data type and doesn't have referntial equality
    // it will keep creating new array.
    setResult(buildArray());

    // setResult(sum());
  }, [sum, buildArray]);

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='input'
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <h1>Output: {userInput || '--'} </h1>
    </div>
  );
}

export default App;
