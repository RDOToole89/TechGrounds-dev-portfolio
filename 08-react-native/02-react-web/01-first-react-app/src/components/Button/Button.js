import React from 'react';
import styled from 'styled-components';

export default function Button({ onClickCallback, buttonText }) {
  return <StyledButton onClick={onClickCallback}>{buttonText}</StyledButton>;
}

export const StyledButton = styled.button`
  padding: 1.2rem 2.2rem;
  background-color: red;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: violet;
  }
`;
