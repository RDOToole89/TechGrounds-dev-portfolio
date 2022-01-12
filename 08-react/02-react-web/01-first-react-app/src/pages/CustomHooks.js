import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from './Home';
import { StyledLink, StyledParagraph } from './Lifecycle';

function CustomHooks() {
  return (
    <Wrapper>
      <Navbar />
      <Title>Custom Hooks</Title>
      <StyledLink
        style={{ textTransform: 'uppercase', fontWeight: '600' }}
        target='_blank'
        href='https://reactjs.org/docs/hooks-custom.html'>
        Official Documentation (custom) Hooks
      </StyledLink>
      <StyledParagraph style={paragraphStyles}>
        A custom Hook is a JavaScript function whose name starts with ”use” and that may call other
        Hooks. Building your own Hooks lets you extract component logic into reusable functions.
      </StyledParagraph>
    </Wrapper>
  );
}

export default CustomHooks;

const paragraphStyles = {
  '--color': 'purple',
  padding: '1rem',
  width: '600px',
  lineHeight: 1.6,
  backgroundColor: 'rgba(0,0,0,0.1)',
};
