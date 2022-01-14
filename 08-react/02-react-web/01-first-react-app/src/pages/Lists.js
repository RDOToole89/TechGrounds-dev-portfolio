import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../components/Button/Button';
import useLocalStorage from '../hooks/useLocalStorage';
import { Title, Wrapper } from '../styled/StyledComponents';

const nameList = ['Roibin', 'Wesley', 'Zico'];

export default function Lists() {
  const [names, setNames] = useLocalStorage('names', nameList);
  const inputRef = useRef(null);

  const handleInput = (event) => {
    let userInput = inputRef.current.value;

    if (event.key === 'Enter' || event.type === 'click') {
      console.log('USERINPUT ISIDE IF', userInput);
      setNames((prevState) => {
        console.log('LOG OF THE PREVIOUS STATE =>', prevState);
        const newState = [...prevState, userInput];
        return newState;
      });
      inputRef.current.value = '';
    }
  };

  return (
    <Wrapper>
      <Title>Name list</Title>
      <input style={{ marginBottom: '20px' }} ref={inputRef} onKeyPress={handleInput} />
      <Button buttonText='submit name' buttonColor='violet' onClickCallback={handleInput} />
      <ul style={{ marginTop: '2rem', listStyle: 'none' }}>
        {names.map((name, i) => (
          <li key={uuidv4()}>
            {i}. === {name}`
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
