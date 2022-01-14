import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import Navbar from '../components/Navbar/Navbar';
import { Title, Wrapper } from '../styled/StyledComponents';

export default function ApiRequest() {
  return (
    <Wrapper>
      <Navbar />
      <Title>API PAGE</Title>

      <Gallery columns={4} />
    </Wrapper>
  );
}
