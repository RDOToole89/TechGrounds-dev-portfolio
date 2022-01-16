import React, { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import {
  Wrapper,
  Title,
  StyledButtonWrapper,
  StyledLink,
  StyledParagraph,
} from '../styled/StyledComponents';

// Rules of Hooks

// Only Call Hooks at the Top Level => not inside loops, conditions or nested functions.
// Always place them at the Top Level of you react function.

// Only Call Hooks from React Functions
// 1. Call Hooks from React function components
// 2. Call Hooks from custom Hooks

// By following these rules, you ENSURE that all stateful lofic in a component is clearly
// visible from its source code.

// If we want to run an effect conditionally, we can put it INSIDE a useEffect hook.

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
  }, [count]);
  // The empty array at the end of the hook, is the  'dependency array'. It will tell
  // the useEffect hook to ONLY rerender the component or run the effect only if certain
  // values have changed! => optization step. If we feed an empty array[] as the second
  // argument to useEffect it functions more like componentDidMount and componentWillUnmount.
  // However there are usually better solutions.

  return (
    <Wrapper>
      <Title>UseEffect Hook</Title>

      <StyledLink target='_blank' href='https://reactjs.org/docs/hooks-rules.html'>
        Official Documentation for useEffect
      </StyledLink>
      <StyledParagraph>{count}</StyledParagraph>
      <StyledParagraph className='count-text'></StyledParagraph>
      <StyledButtonWrapper>
        <Button buttonText='decrease' onClickCallback={decrease} />
        <Button buttonText='increase' onClickCallback={increase} />
      </StyledButtonWrapper>
    </Wrapper>
  );
}
