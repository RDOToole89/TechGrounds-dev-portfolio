import React, { useEffect, useState } from 'react';
import InputText from '../components/InputText/InputText';
import DisplayText from '../components/DisplayText/DisplayText';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from '../styled/StyledComponents';

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

      <Button
        buttonText='click me!'
        buttonColor='red'
        buttonOpacity={0.7}
        onClickCallback={openModalCallback}
      />
    </Wrapper>
  );
}

export default Home;
