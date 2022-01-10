import React from 'react';
import styled from 'styled-components';

export default function Modal({ openModalCallback }) {
  return (
    <StyledModal>
      <StyledClose onClick={openModalCallback}>X</StyledClose>
      <StyledImg src='https://source.unsplash.com/random/800x600' />
    </StyledModal>
  );
}

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  max-width: 400px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledClose = styled.span`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: red;
  cursor: pointer;
  z-index: 100;
`;
