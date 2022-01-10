import React from 'react';
import styled from 'styled-components';

const DisplayBox = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  background-color: #3b82f6;
  margin: 2rem 0rem;
  width: 20rem;
  height: 10rem;
`;

export default function DisplayText({ displayText }) {
  return <DisplayBox>{displayText}</DisplayBox>;
}
