import React from 'react';
import styled from 'styled-components';

export default function Modal({ openModalCallback, newImageCallback, imageUrl }) {
  const clickHandler = () => {
    openModalCallback();
    newImageCallback();
  };

  return (
    <StyledModal>
      <StyledClose onClick={clickHandler}>X</StyledClose>
      <StyledImg src={imageUrl} />
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
