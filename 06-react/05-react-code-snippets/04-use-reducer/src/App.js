import { useReducer } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  NEW_USER_INPUT: 'newUserInput',
  TOGGLE_COLOR: 'toggleColor',
};

const initialState = { count: 0, userInput: '', color: false };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, userInput: action.payload };
    case 'toggleColor': {
      return { ...state, color: !state.color };
    }
    default:
      return;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='App' style={{ color: state.color ? '#FFF' : '#FFF952' }}>
      <input
        type='text'
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: ACTION.NEW_USER_INPUT, payload: e.target.value })
        }
      />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.TOGGLE_COLOR })}>
          Color
        </button>
      </section>
      <br /> <br />
      <p>{state.userInput}</p>
    </div>
  );
}

export default App;
