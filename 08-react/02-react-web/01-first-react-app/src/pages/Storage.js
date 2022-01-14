import React from 'react';
import BrowserStorage from '../components/BrowserStorage/BrowserStorage';
import { Title, Wrapper } from '../styled/StyledComponents';

function Storage() {
  return (
    <Wrapper>
      <Title>Cookies vs Local / Session Storage!</Title>
      <BrowserStorage storageType={'localStorage'} />
      <BrowserStorage storageType={'sessionStorage'} />
    </Wrapper>
  );
}

export default Storage;
