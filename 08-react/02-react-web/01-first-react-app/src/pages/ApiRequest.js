import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from './Home';

export default function ApiRequest({ children }) {
  console.log('CHILDREN', children);

  return (
    <Wrapper>
      <Navbar />
      <Title>API PAGE</Title>
      {children}
    </Wrapper>
  );
}
