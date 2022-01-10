import React, { useEffect, useState } from 'react';
import InputText from '../components/inputText/InputText';
import styled from 'styled-components';
import DisplayText from '../components/displayText/DisplayText';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('http://source.unsplash.com/800x600');

  const textDisplayCallback = (text) => {
    setDisplayText(text);
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
      <Title>First React App Input - Data Binding</Title>
      <InputText callback={textDisplayCallback} />
      <DisplayText displayText={displayText} />
      {modalOpen && (
        <Modal
          openModalCallback={openModalCallback}
          newImageCallback={newImageCallback}
          imageUrl={imageUrl}
        />
      )}

      <Button openModalCallback={openModalCallback} />
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
