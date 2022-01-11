import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import { Wrapper } from './Home';

const styling = (darkMode) => {};

function DarkModeView() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Wrapper>
      <Navbar />
    </Wrapper>
  );
}

export default DarkModeView;
