import React, { useState } from 'react';

// Custom hook to persist our component state across sessions.

function useLocalStorage(key = '', initialValue = '') {
  const [state, setState] = useState(() => {
    try {
      // retrieve item with the key value
      const item = window.localStorage.getItem(key);
      // if the item exists return it by parsing the JSON if not return intialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setLocalStorageState = (newState) => {
    try {
      // check if the newState is a function if so pass the state to to that function
      // for further processing. Otherwise just store the new State
      const newStateValue = typeof newState === 'function' ? newState(state) : newState;

      // set the State to the new State value
      setState(newStateValue);

      // stores the new State in localStorage
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  // return the state and the function to manipulate the state from the hook.
  return [state, setLocalStorageState];
}

export default useLocalStorage;
