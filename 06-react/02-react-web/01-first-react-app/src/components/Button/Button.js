import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/contants';

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

export const StyledButton = styled.button`
  padding: 1.2rem 2.2rem;
  background-color: var(--color, grey);
  opacity: var(--buttonOpacity, 0.95);
  color: ${COLORS.primary};
  border: none;
  text-transform: uppercase;
  font-weight: var(--font-weight-600);
  cursor: pointer;
  z-index: 0;
  transition: all 0.4s ease;

  &:hover {
    background-color: violet;
  }
`;
