import React from 'react';
import styled from 'styled-components';

export default function Button({ onClickCallback, buttonText, buttonColor }) {
  return (
    <StyledButton buttonColor={buttonColor} onClick={onClickCallback}>
      {buttonText}
    </StyledButton>
  );
}
const StyledButton = styled.button`
  padding: 1.2rem 2.2rem;
  background-color: ${(props) => props.buttonColor};
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: violet;
  }
`;
