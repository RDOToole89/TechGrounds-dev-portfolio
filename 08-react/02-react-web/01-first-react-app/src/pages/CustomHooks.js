import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from './Home';
import { StyledLink, StyledParagraph } from './Lifecycle';

function CustomHooks() {
  return (
    <Wrapper>
      <Navbar />
      <Title>Custom Hooks</Title>
      <StyledLink target='_blank' href='https://reactjs.org/docs/hooks-custom.html'>
        Official Documentation (custom) Hooks
      </StyledLink>
      <StyledParagraph style={{ '--color': 'purple', width: '600px', textAlign: 'center' }}>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other
        Hooks.
      </StyledParagraph>
    </Wrapper>
  );
}

export default CustomHooks;
