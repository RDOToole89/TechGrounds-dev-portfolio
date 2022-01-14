import React from 'react';
import BrowserStorage from '../components/BrowserStorage/BrowserStorage';
import CookieStorage from '../components/CookieStorage/CookieStorage';
import { StyledLink, Title, Wrapper } from '../styled/StyledComponents';

function Storage() {
  return (
    <Wrapper>
      <Title>Cookies vs Local / Session Storage!</Title>
      <StyledLink
        target='_blank'
        href='https://www.youtube.com/watch?v=GihQAC1I39Q'
        Lifecycle
        Cheatsheet>
        Great Video on Browser Storage
      </StyledLink>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <BrowserStorage storageType={'localStorage'} />
        <BrowserStorage storageType={'sessionStorage'} />
        <CookieStorage />
      </div>
    </Wrapper>
  );
}

export default Storage;
