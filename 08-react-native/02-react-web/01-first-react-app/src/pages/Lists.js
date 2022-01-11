import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import { Wrapper } from './Home';

export default function Lists() {
  const [names, setNames] = useState([]);
  const inputRef = useRef(null);

  const handleInput = () => {
    const userInput = inputRef.current.value;

    setNames((prevState) => [...prevState, userInput]);
  };

  return (
    <Wrapper>
      <Navbar />

      <input style={{ marginBottom: '20px' }} ref={inputRef} />
      <Button buttonText='submit name' buttonColor='violet' onClickCallback={handleInput} />
      <ul>
        {names.map((name) => (
          <li key={uuidv4()}>{name}</li>
        ))}
      </ul>
    </Wrapper>
  );
}
