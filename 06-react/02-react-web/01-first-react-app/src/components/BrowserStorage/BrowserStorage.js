import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { HeadingSecondary, StyledParagraph } from '../../styled/StyledComponents';
import { capitalize } from '../../utils/capitalize';
import Button from '../Button/Button';

function BrowserStorage({ storageType }) {
  // access the storage type: local or session
  const currentStorage = window[storageType];

  // console.log('currentStorage', currentStorage);

  // Converts the storage to a string
  const currentStorageString = JSON.stringify(currentStorage);

  // Takes the storage type and capitalizes the first letter for the UI
  const storageTypeString = capitalize(storageType.split('S')[0]);

  const [storageInput, setStorageInput] = useState(null);
  const [storageJson, setStorageJson] = useState(currentStorageString);

  // Refers to the propertyName input
  let propertyNameRef = useRef();

  // Creates an object with the current storageString and a property for the
  // user input. It's set to the state when the user unfocusses the input.
  const handleStorageChange = (event) => {
    setStorageInput(
      ({ ...currentStorageString }[propertyNameRef.current.value] = event.target.value)
    );
  };

  // If the user has input a propertyName and the user has pressed enter
  // add a key : value pair to browser storage
  const handleInputPress = (event) => {
    if (event.keyCode === 13 && storageInput) {
      currentStorage.setItem(storageInput, event.target.value);

      // Clear inputs
      event.target.value = '';
      propertyNameRef.current.value = '';

      setStorageJson(JSON.stringify(currentStorage));
    }
  };

  // Clears the storage
  const clearStorage = () => {
    currentStorage.clear();
    setStorageJson(JSON.stringify(currentStorage));
  };

  return (
    <InputWrapper>
      <HeadingSecondary>Current {storageTypeString} Storage:</HeadingSecondary>

      <StyledParagraph style={{ '--paragraph-color': '#fff' }}>{storageJson}</StyledParagraph>
      <input
        ref={propertyNameRef}
        placeholder={`property name for ${storageTypeString}`}
        style={{ marginBottom: '2rem', padding: '.4rem' }}
        onBlur={handleStorageChange}
      />
      <input
        placeholder={`add to ${storageTypeString} storage`}
        style={{ marginBottom: '2rem', padding: '.6rem' }}
        onKeyDown={handleInputPress}
      />

      <Button
        style={{
          '--color': 'grey',
          '--buttonOpacity': '.8',
        }}
        onClickCallback={clearStorage}
        buttonText='clear'
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 2rem;
  margin-right: 2rem;
`;

export default BrowserStorage;
