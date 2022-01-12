import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../contants';

export default function Button({ onClickCallback, buttonText, buttonColor, buttonOpacity }) {
  return (
    <StyledButton
      style={{
        '--color': buttonColor,
        '--buttonOpacity': buttonOpacity,
      }}
      onClick={onClickCallback}>
      {buttonText}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 1.2rem 2.2rem;
  background-color: var(--color, grey);
  opacity: var(--buttonOpacity, 0.95);
  color: ${COLORS.primary};
  border: none;
  text-transform: uppercase;
  font-weight: var(--font-weight-600);
  cursor: pointer;
  z-index: 0;

  &:hover {
    background-color: violet;
  }
`;
