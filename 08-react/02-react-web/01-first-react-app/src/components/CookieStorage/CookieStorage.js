import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { HeadingSecondary, StyledLink, StyledParagraph } from '../../styled/StyledComponents';
import Button from '../Button/Button';

function CookieStorage() {
  // setting a cookie!
  // document.cookie = `name=Roibin; expires=${new Date(2022, 1, 1).toUTCString()}`;

  // Function that creates a cooking and sets it in the browser
  const createCookie = (propertyName, value, expirationDate) => {
    // expirationDate MUST be added as a string in for 'yyyy, d, m'
    const newCookie = `${propertyName}=${value}; expires=${new Date(expirationDate).toUTCString}`;
    // console.log('NEW COOKIE STRING', newCookie);

    document.cookie = newCookie;

    return newCookie;
  };

  // createCookie('lastName', 'OToole', '2999, 1, 1');

  const currentCookies = document.cookie;

  // console.log(currentCookies);
  // console.log('currentCookies', currentCookies);

  const [storageInput, setStorageInput] = useState(null);
  const [storageJson, setStorageJson] = useState(currentCookies);

  // Refers to the propertyName input
  let propertyNameRef = useRef();

  // Creates an object with the current storageString and a property for the
  // user input. It's set to the state when the user unfocusses the input.
  const handleStorageChange = (event) => {
    // console.log('PROPERTY NAME', event.target.value);

    setStorageInput(event.target.value);
  };

  // If the user has input a propertyName and the user has pressed enter
  // add a key : value pair to browser storage
  const handleInputPress = (event) => {
    if (event.keyCode === 13 && storageInput) {
      // console.log('Cookie Value', event.target.value);
      const propertyName = propertyNameRef.current.value;
      const cookieValue = event.target.value;

      createCookie(propertyName, cookieValue, '3000, 1,1');

      // Clear inputs
      event.target.value = '';
      propertyNameRef.current.value = '';

      setStorageJson(`${document.cookie}`);
    }
  };

  // Clears the storage
  const clearCookies = () => {
    const cookies = document.cookie.split(';');

    cookies.forEach((cookie) => {
      const equalSignPosition = cookie.indexOf('=');
      const name = equalSignPosition > -1 ? cookie.slice(0, equalSignPosition) : cookie;
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });

    setStorageJson(`${document.cookie}`);
  };

  return (
    <InputWrapper>
      <HeadingSecondary>Cookie Storage:</HeadingSecondary>

      <StyledParagraph style={{ '--paragraph-color': '#fff' }}>
        {storageJson ? storageJson : `{}`}
      </StyledParagraph>
      <input
        ref={propertyNameRef}
        placeholder='property name for Cookie'
        style={{ marginBottom: '2rem', padding: '.4rem' }}
        onBlur={handleStorageChange}
      />
      <input
        placeholder='value for cookie'
        style={{ marginBottom: '2rem', padding: '.6rem' }}
        onKeyDown={handleInputPress}
      />

      <Button
        style={{
          '--color': 'grey',
          '--buttonOpacity': '.8',
        }}
        onClickCallback={clearCookies}
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
`;

export default CookieStorage;
