import React, { useEffect, useState } from 'react';
import InputText from '../components/InputText/InputText';
import styled from 'styled-components';
import DisplayText from '../components/DisplayText/DisplayText';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';

// Hooks should only be called from the top level of your React function
// Hooks must not be called from nested code (e.g., loops, conditions)
// Hooks may also be called at the top level from custom Hooks

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('http://source.unsplash.com/800x600');

  const textDisplayCallback = (event) => {
    setDisplayText(event.target.value);
  };

  const newImageCallback = () => {
    const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;

    setImageUrl(`http://source.unsplash.com/800x600?=sig${randomNumber(1, 1000)}`);
  };

  useEffect(() => {
    console.log('Hello!');
  }, []);

  const openModalCallback = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Wrapper>
      <Navbar />
      <Title>First React App Input - Data Binding</Title>
      <InputText value={displayText} textDisplayCallback={textDisplayCallback} />
      <DisplayText displayText={displayText} />
      {modalOpen && (
        <Modal
          openModalCallback={openModalCallback}
          newImageCallback={newImageCallback}
          imageUrl={imageUrl}
        />
      )}

      <Button buttonText='click me!' onClickCallback={openModalCallback} />
    </Wrapper>
  );
}

export default Home;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100vh;
  background: orange;
  margin: 0 auto;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: black;
  margin-bottom: 1.4rem;
`;
