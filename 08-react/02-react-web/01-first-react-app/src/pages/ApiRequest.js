import React from 'react';
import Gallery from '../components/Gallery/Gallery';
import { Title, Wrapper } from '../styled/StyledComponents';

export default function ApiRequest() {
  return (
    <Wrapper>
      <Title marginBottom={'--mg-bottom-md'}>API PAGE</Title>
      <Gallery columns={4} />
    </Wrapper>
  );
}
