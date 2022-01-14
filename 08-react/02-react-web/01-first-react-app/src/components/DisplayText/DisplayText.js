import React from 'react';
import styled from 'styled-components';

export default function DisplayText({ displayText }) {
  return <DisplayBox>{displayText}</DisplayBox>;
}

const DisplayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(211, 38%, 20%);
  margin: 2rem 0rem;
  width: 20rem;
  height: 10rem;
`;
