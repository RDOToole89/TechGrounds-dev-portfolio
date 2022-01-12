import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Navbar from '../components/Navbar/Navbar';
import { StyledButtonWrapper } from './About';
import { Wrapper, Title } from './Home';
import { StyledParagraph } from './Lifecycle';

export default function UseEffect() {
  const [count, setCount] = useState(0);

  const decrease = () => {
    setCount(count - 1);
  };

  const increase = () => {
    console.log('Called increase function => changes the state');

    setCount(count + 1);
  };

  // By using this Hook, you tell React that your component needs to do something after render.
  // React will remember the function you passed (we’ll refer to it as our “effect”), and call
  // it later after performing the DOM updates.

  // An effect is something we want to happen AFTER the component renders or mounts.

  useEffect(() => {
    // By default it runs after EVERY rerender.

    // Placing useEffect inside the component lets us access the count state variable
    // (or any props) right from the effect. We don’t need a special API to read it —
    // it’s already in the function scope. Hooks embrace JavaScript closures and avoid
    // introducingReact-specific APIs where JavaScript already provides a solution.

    console.log('UseEffect Hook 01 => runs when the component is mounted or if the state changes');

    let countText = document.querySelector('.count-text');
    countText.textContent = `You clicked count: ${count} times!`;
  });

  return (
    <Wrapper>
      <Navbar />
      <Title>UseEffect Hook</Title>
      <StyledParagraph>{count}</StyledParagraph>
      <StyledParagraph className='count-text'></StyledParagraph>
      <StyledButtonWrapper>
        <Button buttonText='decrease' onClickCallback={decrease} />
        <Button buttonText='increase' onClickCallback={increase} />
      </StyledButtonWrapper>
    </Wrapper>
  );
}
