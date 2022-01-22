import { useRef, useState } from 'react';

// With useRef we can create a referene to a an element
// It's possible to initialize it with a a beginning value

// Rememeber with useRef
// 1. The value remains THE SAME between renders
// 2. Updating the reference DOES NOT trigger a re-render

// This is the BIGGEST difference between useState and useRef
// Because changing the state will always trigger the rerender
// of a component.

function App() {
  const [randomInput, setRandomInput] = useState('');
  const [seconds, setSeconds] = useState(0);
  const renders = useRef(0);
  const inputRef = useRef();
  const timerId = useRef();

  const handleChange = (event) => {
    setRandomInput(event.target.value);

    // With this mechanism we can for example count the number
    // of times a component re-renders. With every state change it
    // will add one to the render. However the reference persists
    // across rerenders
    renders.current++;
  };

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prevState) => prevState + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    timerId.current = 0;
  };

  const resetTimer = () => {
    stopTimer();

    if (seconds) {
      renders.current++;
      setSeconds(0);
    }
  };

  const focusOnInput = () => {
    inputRef.current.focus();
  };

  return (
    <div className='App'>
      <input
        ref={inputRef}
        type='text'
        value={randomInput}
        placeHolder='Random Input'
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={focusOnInput}>Focus on Input</button>

      <br />
      <br />
      <p>Renders: {renders.current}</p>

      <section>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </section>

      <br />
      <p>Seconds: {seconds}</p>
      <br />

      <p>{randomInput}</p>
    </div>
  );
}

export default App;
