import React, { useState } from 'react';
import InputText from '../components/inputText/InputText';
import styled from 'styled-components';
import DisplayText from '../components/displayText/DisplayText';
import Button from '../components/Button/Button';

function Home() {
  const [displayText, setDisplayText] = useState('');

  const textDisplayCallback = (text) => {
    setDisplayText(text);
  };

  return (
    <Wrapper>
      <Title>First React App Input - Data Binding</Title>
      <InputText callback={textDisplayCallback} />
      <DisplayText displayText={displayText} />

      <Button />
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  background: orange;
  margin: 0 auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: black;
  margin-bottom: 1.4rem;
`;
